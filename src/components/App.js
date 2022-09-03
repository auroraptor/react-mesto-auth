import { useState, useEffect } from 'react';
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
  const [ buttonTextContent, setButtonTextContent] = useState("Сохранить")

  // handlers
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

  // cards
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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.like(card, isLiked)
    .then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card._id ))
    })
    .catch(err => console.log(err));
  }

  // user
  useEffect(() => {
    api.getUserInfo()
    .then((res) => setUser(res) )
    .catch((err) => console.log(err)) // TODO показать что-то вроде попапа SOMETHING WENT WRONG
  }, []);

  // patch profile
  const handleUpdateUser = (data) => {
    setButtonTextContent('Сохранение');

    api.editUserInfo(data)
    .then(res => setUser(res))
    .catch(err => console.log(err))
    .finally(() => {
      closeAllPopups();
      setButtonTextContent("Сохранить")
    })
  }

  const handleUpdateAvatar = (link) => {
    setButtonTextContent('Сохранение');

    api.editUserAvatar(link)
    .then(res => setUser(res))
    .catch(err => console.log(err))
    .finally(() => {
      closeAllPopups();
      setButtonTextContent("Сохранить")
    })
  }

  // upload new card
  const handleAddPlaceSubmit = (data) => {
    setButtonTextContent('Сохранение');
    api.postNewCard(data)
    .then(newCard => setCards([newCard, ...cards]))
    .catch(err => console.log(err))
    .finally(() => {
      closeAllPopups();
      setButtonTextContent("Сохранить")
    })
  }

  // on close
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page"><div className="page__container">

    <Header />

    <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>

    <Footer />

    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} buttonText={buttonTextContent}/>

    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} buttonText={buttonTextContent}/>

    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} buttonText={buttonTextContent}></AddPlacePopup>

    <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} buttonTextContent="Да">
    </PopupWithForm>

    <ImagePopup card={selectedCard} isOpened={handleCardClick} onClose={closeAllPopups}/>

   </div></div>
   </CurrentUserContext.Provider>
  );
}

export default App;
