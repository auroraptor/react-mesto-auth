/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";
import ConfirmPopup from "./ConfirmPopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setConnfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false) // про попап с картинкой что-то чтобы избегать крестика fix animation popupclosed
  const [selectedCard, setSelectedCard] = useState(null);
  const [removeCard, setRemoveCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: "", about: "", avatar: "" });
  const [cards, setCards] = useState([]);
  const [email, setEmail] = useState("");
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
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
    if (!loggedIn) return;

    Promise.all([api.getUserInfo(), api.getCardList()])
    .then(([user, cards]) => {
      setCurrentUser(user);
      setCards(cards);
    })
    .catch(e => console.log(e))
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) return;
    api
      .getContent(jwt)
      .then((res) => {
        setEmail(res.data.email);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = (email, password) => {
    setIsLoading(true);

    api
      .login(password, email)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setEmail(email);
        setLoggedIn(true);
        navigate("/react-mesto-auth/");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const handleRegister = (email, password) => {
    setIsLoading(true);
    api
      .register(password, email)
      .then(() => setSuccess(true))
      .catch((err) => {
        setSuccess(false);
        console.log("error", err);
      })
      .finally(() => {
        setInfoTooltipOpen(true);
        setIsLoading(false);
      });
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    setCurrentUser({ name: "", about: "", avatar: "" });
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .like(card, isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    setIsLoading(true);
    api
      .deleteCard(card)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
        setIsLoading(false);
      });
  };

  const handleConfirmationPopup = (card) => {
    setConnfirmPopupOpen(true);
    setRemoveCard(card); //const card = card; // ?
  };

  useEffect(() => {
    if (!isInfoTooltipOpen && success) navigate("/react-mesto-auth/sign-in");
  }, [isInfoTooltipOpen]);

  const handleUpdateUser = (data) => {
    setIsLoading(true);

    api
      .editUserInfo(data)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
        setIsLoading(false);
      });
  };

  const handleUpdateAvatar = (link) => {
    setIsLoading(true);

    api
      .editUserAvatar(link)
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
        setIsLoading(false);
      });
  };

  const handleAddPlaceSubmit = (data) => {
    setIsLoading(true);

    api
      .postNewCard(data)
      .then((newCard) => setCards([newCard, ...cards]))
      .catch((err) => console.log(err))
      .finally(() => {
        closeAllPopups();
        setIsLoading(false);
      });
  };

  const closeAllPopups = () => {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    // setSelectedCard(null);
    setConnfirmPopupOpen(false);
    setImagePopupOpen(false);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/react-mesto-auth/"
          element={
            <CurrentUserContext.Provider value={currentUser}>
              <Header
                link="/react-mesto-auth/sign-in"
                text="Выйти"
                email={email}
                onLogOut={handleLogOut}
              ></Header>

              <Main
                onEditAvatar={handleEditAvatarClick}
                onAddPlace={handleAddPlaceClick}
                onEditProfile={handleEditProfileClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleConfirmationPopup}
              />

              <Footer />

              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
                isLoading={isLoading}
              />

              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
                isLoading={isLoading}
              />

              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
                isLoading={isLoading}

              />

              <ConfirmPopup
                name="confirm"
                title="Вы уверены?"
                card={removeCard}
                isOpen={isConfirmPopupOpen}
                onCardDelete={handleCardDelete}
                onClose={closeAllPopups}
                isLoading={isLoading}

              />

              <ImagePopup
                card={selectedCard}
                isOpened={isImagePopupOpen}
                onClose={closeAllPopups}
              />
            </CurrentUserContext.Provider>
          }
        />
      </Route>
      <Route
        element={
          <Register
            success={success}
            isOpen={isInfoTooltipOpen}
            onRegister={handleRegister}
            closeInfoTooltip={setInfoTooltipOpen}
            disabled={isLoading}
            isLoading={isLoading}
          />
        }
        path="/react-mesto-auth/sign-up"
      />
      <Route element={<Login onLogin={handleLogin} isLoading={isLoading}/>} path="/react-mesto-auth/sign-in" />
      <Route element={<NotFound />} path="/*" />
      {/* TODO */}
    </Routes>
  );
}

export default App;
