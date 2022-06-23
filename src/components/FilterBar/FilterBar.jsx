import { useState } from "react";
import css from "./styles.module.css";

export const FilterBar = ({ setIsCategory }) => {
  const options = [
    { value: "All", text: "Show All" },
    { value: "Design", text: "Design" },
    { value: "Branding", text: "Branding" },
    { value: "Illustration", text: "Illustration" },
    { value: "Motion", text: "Motion" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const sendCategoryFromRadioFilter = (e) => {
    setIsCategory(e.target.id);
  };

  const sendCategoryFromSelectFilter = (e) => {
    setSelected(e.target.value);
    setIsCategory(e.target.value);
  };

  return (
    <>
      <div className={css.radioFilter}>
        <input
          className={css.item}
          type="radio"
          name="filter"
          id="All"
          defaultChecked
          onClick={(e) => sendCategoryFromRadioFilter(e)}
        />
        <label className={css.itemText} htmlFor="All">
          Show ALL
        </label>
        <input
          className={css.item}
          type="radio"
          name="filter"
          id="Design"
          onClick={(e) => sendCategoryFromRadioFilter(e)}
        />
        <label className={css.itemText} htmlFor="Design">
          Design
        </label>
        <input
          className={css.item}
          type="radio"
          name="filter"
          id="Branding"
          onClick={(e) => sendCategoryFromRadioFilter(e)}
        />
        <label className={css.itemText} htmlFor="Branding">
          Branding
        </label>
        <input
          className={css.item}
          type="radio"
          name="filter"
          id="Illustration"
          onClick={(e) => sendCategoryFromRadioFilter(e)}
        />
        <label className={css.itemText} htmlFor="Illustration">
          Illustration
        </label>
        <input
          className={css.item}
          type="radio"
          name="filter"
          id="Motion"
          onClick={(e) => sendCategoryFromRadioFilter(e)}
        />
        <label className={css.itemText} htmlFor="Motion">
          Motion
        </label>
      </div>
      <select
        className={css.selectFilter}
        value={selected}
        onChange={sendCategoryFromSelectFilter}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </>
  );
};
