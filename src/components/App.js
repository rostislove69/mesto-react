import "./App.css";
import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import AddPopup from "./AddPopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isFullImagePopupOpen, setIsFullImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  
  React.useEffect(() => {
    const onKeypress = (evt) => {
      if(evt.key === "Escape"){
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", onKeypress);
    return () => {
      document.removeEventListener("keydown", onKeypress)
    }
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsFullImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsFullImagePopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
      />
      <AddPopup 
        isOpen={isAddPlacePopupOpen} 
        isClose={closeAllPopups} 
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
      />
      <div className="popup popup_type_delete-confirm">
        <div className="popup__container">
          <form
            className="popup__form popup__form_type_add"
            name="form"
            noValidate
          >
            <button
              className="popup__button-close popup__button-close_type_add"
              type="button"
            ></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              className="popup__button-submit button-submit-add"
              type="submit"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <ImagePopup 
        card={selectedCard}
        isOpen={isFullImagePopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
