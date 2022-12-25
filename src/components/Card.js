function Card(props) {
  return (
    <li className="elements__element">
      <button className="elements__delete-button" type="button"></button>
      <img className="elements__image" onClick={() => props.onCardClick(props.card)} src={props.link} alt="name" />
      <div className="elements__block">
        <h2 className="elements__name">{props.name}</h2>
        <div className="elements__like-block">
          <button className="elements__like-button" type="button"></button>
          <p className="elements__like-counter">{props.likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
