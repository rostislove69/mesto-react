import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
    buttonText="Сохранить"
      name="edit-avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      isClose={props.isClose}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_pictures-name"
          id="avatar-link-input"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
          value=""
        />
        <span className="popup__input-error avatar-link-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
