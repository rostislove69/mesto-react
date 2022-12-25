import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      isClose={props.isClose}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_user-name"
          id="user-name-input"
          type="text"
          placeholder="Имя"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error user-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_user-about"
          id="user-about-input"
          type="text"
          placeholder="О себе"
          name="about"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error user-about-input-error"></span>
      </label>
      <button className="popup__button-submit button-submit-edit" type="submit">
        Сохранить
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
