import {useState, useEffect} from "react";
import Avatar from "../images/avatar.jpg";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState("Исследователь океанов");
  const [userAvatar, setUserAvatar] = useState(Avatar);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInformation()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <main>
      <section className="profile">
        <div className="profile__two-columns">
          <button
            onClick={props.onEditAvatar}
            className="profile__edit-avatar"
            type="button"
          >
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="Фото профиля"
            />
          </button>
          <div className="profile__info">
            <div className="profile__row">
              <h1 className="profile__name">{userName}</h1>
              <button
                onClick={props.onEditProfile}
                className="profile__edit-button"
                type="button"
              ></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__add-button"
          type="button"
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card 
              key={card._id}
              card={card}
              onCardClick={props.onCardClick}
              name={card.name} 
              link={card.link} 
              likes={card.likes.length} 
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
