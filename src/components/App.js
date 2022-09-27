import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWittForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = useState(false);
  const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState(null);
  const [ currentUser, setUser ] = useState({name: '', about: '', avatar: ''});
  const [ cards, setCards ] = useState([]);
  const [ email, setEmail] = useState('')
  const [ isInfoTooltipOpen, setInfoTooltipOpen ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setSelectedCard(card)
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  useEffect(() => {
    api.getCardList()
    .then((data) => {
     return data.map(item => { return {
      name: item.name,
      link: item.link,
      likes: item.likes,
      _id: item._id,
      owner: item.owner,
    }});
    })
    .then(cards => setCards(cards))
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('jwt')) return;
    const jwt = localStorage.getItem('jwt');
    api.getContent(jwt)
    .then(res => {
      setEmail(res.data.email)
    })
    .catch(err => console.log(err));
  }, []);

  const handleLogin = (email, password) => {
    api.login(password, email)
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      navigate('/');
    })
    .catch(err => console.log(err))
  }

  const handleRegister = (email, password) => {
    api.register(password, email)
    .then(() => setSuccess(true))
    .catch((err) => {
      setSuccess(false);
      console.log('error', err);
    })
    .finally(() => setInfoTooltipOpen(true));
  }

  const handleLogOut = () => localStorage.removeItem('jwt');

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.like(card, isLiked)
    .then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id ))
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    api.getUserInfo()
    .then((res) => setUser(res) )
    .catch((err) => console.log(err))
  }, []);

  useEffect(() => {
    if (!isInfoTooltipOpen && success) navigate('/sign-in');
  }, [isInfoTooltipOpen, success, navigate]);

  const handleUpdateUser = (data) => {
    api.editUserInfo(data)
    .then(res => setUser(res))
    .catch(err => console.log(err))
    .finally(() => closeAllPopups());
  }

  const handleUpdateAvatar = (link) => {
    api.editUserAvatar(link)
    .then(res => setUser(res))
    .catch(err => console.log(err))
    .finally(() => closeAllPopups())
  }

  const handleAddPlaceSubmit = (data) => {
    api.postNewCard(data)
    .then(newCard => setCards([newCard, ...cards]))
    .catch(err => console.log(err))
    .finally(() => closeAllPopups())
  }

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute/>}>
          <Route path="/*" element= {
            <CurrentUserContext.Provider value={currentUser}>
              <Header link="/sign-in" text="Выйти" email={email} onLogOut={handleLogOut}></Header>

              <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>

              <Footer />

              <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

              <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

              <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

              <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} buttonTextContent="Да" />

              <ImagePopup card={selectedCard} isOpened={handleCardClick} onClose={closeAllPopups}/>
            </CurrentUserContext.Provider>}/>
      </Route>
      <Route element={<Register success={success} isOpen={isInfoTooltipOpen} onRegister={handleRegister} closeInfoTooltip={setInfoTooltipOpen}/>}  path="/sign-up" />
      <Route element={<Login onLogin={handleLogin}/>} path="/sign-in"/>
      <Route element={<NotFound/>} path="/*"/>
    </Routes>
  );
}

export default App;
