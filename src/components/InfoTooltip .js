import React from "react";
import SuccessImage from "../images/success.svg";
import FailImage from "../images/fail.svg";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup_type_${props.result ? "success" : "fail"} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <form className="popup__form">
          <button
            onClick={props.isClose}
            className="popup__button-close"
            type="button"
          ></button>
          <img
            className="popup__tooltip-image"
            src={!props.result ? SuccessImage : FailImage}
            alt={!props.result ? "Усех" : "Неудача"}
          />
          <h2 className="popup__tooltip-title">
            {!props.result
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </h2>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;
