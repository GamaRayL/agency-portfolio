/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import css from "./styles.module.css";

export const Navbar = () => {
  const arValues = ["About", "Services", "Pircing", "Blog"];

  return (
    <div className={css.navbar}>
      <div className={css.companyContainer}>
        <div className={css.logo}>
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <span className={css.companyName}>Agency</span>
      </div>
      <ul className={css.list}>
        {arValues.map((i) => (
          <li key={i} className={css.listItem}>
            <a href="#">{i}</a>
          </li>
        ))}
      </ul>
      <div className={css.button}>CONTACT</div>
    </div>
  );
};
