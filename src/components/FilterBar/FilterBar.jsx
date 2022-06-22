import css from "./styles.module.css";

export const FilterBar = ({ setIsCategory }) => {
  const sendCategory = (e) => {
    const id = e.target.id;
    setIsCategory(id);
  };

  return (
    <div className={css.filter}>
      <input
        className={css.item}
        type="radio"
        name="filter"
        id="All"
        defaultChecked
        onClick={(e) => sendCategory(e)}
      />
      <label className={css.itemText} htmlFor="All">
        Show ALL
      </label>
      <input
        className={css.item}
        type="radio"
        name="filter"
        id="Design"
        onClick={(e) => sendCategory(e)}
      />
      <label className={css.itemText} htmlFor="Design">
        Design
      </label>
      <input
        className={css.item}
        type="radio"
        name="filter"
        id="Branding"
        onClick={(e) => sendCategory(e)}
      />
      <label className={css.itemText} htmlFor="Branding">
        Branding
      </label>
      <input
        className={css.item}
        type="radio"
        name="filter"
        id="Illustration"
        onClick={(e) => sendCategory(e)}
      />
      <label className={css.itemText} htmlFor="Illustration">
        Illustration
      </label>
      <input
        className={css.item}
        type="radio"
        name="filter"
        id="Motion"
        onClick={(e) => sendCategory(e)}
      />
      <label className={css.itemText} htmlFor="Motion">
        Motion
      </label>
    </div>
  );
};
