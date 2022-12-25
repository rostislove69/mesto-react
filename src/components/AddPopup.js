import PopupWithForm from "./PopupWithForm.js";

function AddPopup(props) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={props.isOpen}
      isClose={props.isClose}
    >
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_pictures-name"
          id="pictures-name-input"
          type="text"
          placeholder="Название"
          name="name"
          required
          minLength="2"
          maxLength="30"
          value=""
        />
        <span className="popup__input-error pictures-name-input-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input popup__input_type_pictures-link"
          id="pictures-link-input"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
          value=""
        />
        <span className="popup__input-error pictures-link-input-error"></span>
      </label>
      <button className="popup__button-submit button-submit-add" type="submit">
        Создать
      </button>
    </PopupWithForm>
  );
}

export default AddPopup;
