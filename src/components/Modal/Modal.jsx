import css from "./styles.module.css";

export const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`${css.modal} ${active && css.modalActive}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${css.content} ${active && css.contentActive}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
