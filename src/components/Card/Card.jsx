import css from "./styles.module.css";

export const Card = ({ setIsCategory, id, name, category, img }) => {
  const handleChanger = (e) => {
    console.log(e.target.id);
    setIsCategory(e.target.id);
  };

  return (
    <div className={css.card}>
      <img className={css.img} src={`./images/${img}`} alt="card" />
      <div className={css.container}>
        <div
          className={css.category}
          id={category}
          onClick={(e) => handleChanger(e)}
        >
          {category}
        </div>
        <div className={css.name}>{name}</div>
      </div>
    </div>
  );
};
