import css from "./styles.module.css";

export const FilterBar = ({ options, onClick }) => {
  return (
    <>
      <div className={css.bar}>
        {options.map((el) => (
          <div
            key={el.category}
            className={`${css.item} ${el.selected && css.itemActive}`}
            onClick={() => onClick(el.category)}
          >
            {el.value}
          </div>
        ))}
      </div>
      <select className={css.altBar} onChange={(e) => onClick(e.target.value)}>
        {options.map((option) => (
          <option
            className={css.option}
            key={option.category}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </>
  );
};
