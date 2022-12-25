function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen? "popup_opened" : ""}`}>
        <div className="popup__container">
          <form
            className={`popup__form popup__form_type_${props.name}`}
            name="form"
            noValidate
          >
            <button
              onClick={props.isClose}
              className={`popup__button-close popup__button-close_type_${props.name}`}
              type="button"
            ></button>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;