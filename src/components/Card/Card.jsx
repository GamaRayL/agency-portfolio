import css from "./styles.module.css";

export const Card = ({
  stateId,
  setStateId,
  setIsCategory,
  id,
  name,
  category,
  img,
}) => {
  const sendCategory = (e) => {
    setIsCategory(e.target.id);
  };

  const changeStateIdInArray = (id) => {
    stateId.includes(id)
      ? setStateId([...stateId.filter((item) => item !== id)])
      : setStateId([...stateId, id]);
  };

  return (
    <div
      onClick={() => changeStateIdInArray(id)}
      className={`${css.card} ${stateId.includes(id) ? css.bordered : ""}`}
    >
      <img className={css.img} src={`./images/${img}`} alt="card" />
      <div className={css.container}>
        <p id="log"></p>
        <div
          className={css.category}
          id={category}
          onClick={(e) => sendCategory(e)}
        >
          {category}
        </div>
        <div className={css.name}>{name}</div>
      </div>
    </div>
  );
};
