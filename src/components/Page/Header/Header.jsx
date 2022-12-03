import { Navbar } from "components";
import css from "./styles.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        <Navbar />
        <div className={css.container}>
          <h1 className={css.title}>Portfolio</h1>
          <p className={css.description}>
            Agency provides a full service range including technical skills,
            design, business understanding.
          </p>
        </div>
      </div>
    </header>
  );
};
