import { useCallback, useEffect, useState } from "react";
import { Card, FilterBar, Modal } from "components";
import elements from "store/elements.json";
import arOptions from "store/options.json";
import css from "./styles.module.css";

export const Main = () => {
  const [arElements, setArElements] = useState(elements);
  const [maxElements, setMaxElements] = useState(9);
  const [category, setCategory] = useState("All");
  const [cardId, setCardId] = useState([]);
  const [options, setOptions] = useState(arOptions);
  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(true);

  const onSumbitCategory = (eCategory) => {
    setOptions(
      options.map((opt) =>
        opt.category === eCategory
          ? { ...opt, selected: true }
          : { ...opt, selected: false }
      )
    );
    eCategory === "Show All" ? setCategory("All") : setCategory(eCategory);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const removeSelectedCards = useCallback(
    (event) => {
      if (event.keyCode === 46) {
        setArElements(arElements.filter((item) => !cardId.includes(item.id)));
      }
    },
    [arElements, cardId]
  );

  useEffect(() => {
    window.addEventListener("keydown", removeSelectedCards);
    return () => window.removeEventListener("keydown", removeSelectedCards);
  }, [removeSelectedCards]);

  const arraySlice = arElements.slice(0, maxElements);

  const filtredCards =
    category === "All"
      ? arraySlice.filter((item) => item.category !== category)
      : arraySlice.filter((item) => item.category === category);

  const onSubmitElement = () => {
    setMaxElements(maxElements === 9 ? maxElements + 9 : maxElements - 9);
  };

  return (
    <main className={css.main}>
      <div className={css.wrapper}>
        <Modal isModal={isModal} setIsModal={setIsModal} />
        <FilterBar options={options} onClick={onSumbitCategory} />
        <div className={css.container}>
          <div className={css.box}>
            {isLoading ? (
              <div className={css.loader}></div>
            ) : (
              filtredCards.map((item) => (
                <Card
                  cardId={cardId}
                  setCardId={setCardId}
                  setCategory={setCategory}
                  onClick={onSumbitCategory}
                  key={item.id}
                  {...item}
                />
              ))
            )}
          </div>
          <div className={css.button} onClick={onSubmitElement}>
            {maxElements <= 9 ? "LOAD MORE" : "RETURN"}
          </div>
        </div>
      </div>
    </main>
  );
};
