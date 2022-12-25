function ImagePopup(props) {
  return (
    <div className={`popup popup_type_full-image ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button
          onClick={props.onClose}
          className="popup__button-close popup__button-close_type_full-image"
          type="button"
        ></button>
        <img className="popup__image" src={props.card ? props.card.link : ""} alt={props.card.name} />
        <p className="popup__image-name">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
