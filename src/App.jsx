import { useState } from "react";
import array from "store/elements.json";
import css from "./styles.module.css";
import { Header, Main } from "components/Page";

function App() {
  const [maxElements, setMaxElements] = useState(9);
  const [isCategory, setIsCategory] = useState();
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
        setIsCategory={setIsCategory}
        filtredArray={filtredArray}
        changeAmount={changeAmount}
        maxElements={maxElements}
      />
    </div>
  );
}

export default App;
