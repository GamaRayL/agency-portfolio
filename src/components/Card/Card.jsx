import { useState } from "react";
import { Modal } from "components";
import css from "./styles.module.css";

export const Card = (props) => {
  const { cardId, setCardId, onClick, id, name, category, img } = props;

  const [modalActive, setIsModalActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const onSubmitCheck = (id) => {
    cardId.includes(id)
      ? setCardId([...cardId.filter((item) => item !== id)])
      : setCardId([...cardId, id]);
  };

  const CardPopup = (
    <Modal active={modalActive} setActive={setIsModalActive}>
      <img className={css.modalImage} src={`./images/${img}`} alt="card" />
      <div className={css.modalCard}>
        <div>
          <h2 className={css.modalTitle}>{name}</h2>
          <p className={css.modalContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quae
            officia officiis nemo ex aut autem, harum error reiciendis rem
            magnam deserunt ut incidunt illo magni necessitatibus! In error
            commodi, voluptate sit id, laudantium omnis molestias eius quae unde
            nostrum at. Quos distinctio quae voluptatum sint rem. Expedita,
            veritatis reprehenderit?
          </p>
        </div>
        <div
          className={css.modalDeleteIcon}
          onClick={() => setIsModalActive(false)}
        >
          <img src="./images/close.svg" alt="delete icon" />
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      {CardPopup}
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsModalActive(true)}
        className={`${css.card}`}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <input
            className={css.checkmark}
            id={id}
            type="checkbox"
            onChange={() => onSubmitCheck(id)}
          />
          <label
            htmlFor={id}
            className={`${css.bookmark} ${
              (isHover || cardId.includes(id)) && css.bookmarkActive
            }`}
          ></label>
        </div>
        <img className={css.img} src={`./images/${img}`} alt="card" />
        <div className={css.container}>
          <div
            className={css.category}
            onClick={(e) => {
              e.stopPropagation();
              onClick(category);
            }}
          >
            {category}
          </div>
          <div className={css.title}>{name}</div>
        </div>
      </div>
    </>
  );
};
