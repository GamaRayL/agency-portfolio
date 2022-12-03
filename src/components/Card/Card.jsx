import css from "./styles.module.css";

export const Card = (props) => {
  const { cardId, setCardId, onClick, id, name, category, img } = props;

  const onSubmitCardID = (id) => {
    cardId.includes(id)
      ? setCardId([...cardId.filter((item) => item !== id)])
      : setCardId([...cardId, id]);
  };

  return (
    <div
      onClick={() => onSubmitCardID(id)}
      className={`${css.card} ${cardId.includes(id) ? css.bordered : ""}`}
    >
      <img className={css.img} src={`./images/${img}`} alt="card" />
      <div className={css.container}>
        <p id="log"></p>
        <div
          className={css.category}
          onClick={(e) => {
            e.stopPropagation();
            onClick(category);
          }}
        >
          {category}
        </div>
        <div className={css.name}>{name}</div>
      </div>
    </div>
  );
};
