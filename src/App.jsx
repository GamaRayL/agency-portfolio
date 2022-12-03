import { Header, Main } from "components/Page";
import css from "./styles.module.css";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
