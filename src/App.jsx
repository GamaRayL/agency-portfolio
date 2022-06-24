import { useCallback, useState, useEffect } from "react";
import elements from "store/elements.json";
import css from "./styles.module.css";
import { Header, Main } from "components/Page";

function App() {
  const [array, setArray] = useState(elements);
  const [maxElements, setMaxElements] = useState(9);
  const [isCategory, setIsCategory] = useState();
  const [stateId, setStateId] = useState([]);

  const removeSelectedCards = useCallback(
    (event) => {
      if (event.code === "Delete") {
        setArray(array.filter((item) => !stateId.includes(item.id)));
      }
    },
    [array, stateId]
  );

  useEffect(() => {
    window.addEventListener("keydown", removeSelectedCards);
    return () => window.removeEventListener("keydown", removeSelectedCards);
  }, [removeSelectedCards]);

  const arraySlice = array.slice(0, maxElements);

  const filtredArray =
    isCategory === "All" || isCategory === undefined
      ? arraySlice.filter((item) => item.category !== isCategory)
      : arraySlice.filter((item) => item.category === isCategory);

  const changeAmount = () => {
    setMaxElements(maxElements === 9 ? maxElements + 9 : maxElements - 9);
  };

  return (
    <div className={css.app}>
      <Header />
      <Main
        stateId={stateId}
        setStateId={setStateId}
        setIsCategory={setIsCategory}
        filtredArray={filtredArray}
        changeAmount={changeAmount}
        maxElements={maxElements}
      />
    </div>
  );
}

export default App;
