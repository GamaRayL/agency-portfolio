import css from "./styles.module.css";
import { Card, FilterBar } from "components";

export const Main = ({
  setIsCategory,
  changeAmount,
  filtredArray,
  maxElements,
}) => {
  return (
    <main className={css.main}>
      <div className={css.wrapper}>
        <FilterBar setIsCategory={setIsCategory} />
        <div className={css.container}>
          <div className={css.box}>
            {filtredArray.map((item) => (
              <Card setIsCategory={setIsCategory} key={item.id} {...item} />
            ))}
          </div>
          <div className={css.button} onClick={changeAmount}>
            {maxElements <= 9 ? "LOAD MORE" : "RETURN"}
          </div>
        </div>
      </div>
    </main>
  );
};
