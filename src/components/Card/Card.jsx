import { useState } from "react";
import css from "./styles.module.css";

export const Card = ({
  removeCard,
  setIsCategory,
  id,
  name,
  category,
  img,
}) => {
  const [isBorder, setIsBorder] = useState(false);
  const sendCategory = (e) => {
    setIsCategory(e.target.id);
  };

  const setData = () => {
    setIsBorder(!isBorder);
  };

  return (
    <div
      tabIndex="0"
      onKeyDown={(e) =>
        isBorder ? (e.code === "Delete" ? removeCard(id) : null) : null
      }
      className={isBorder ? css.bordered : css.card}
      onClick={() => setData(id)}
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
