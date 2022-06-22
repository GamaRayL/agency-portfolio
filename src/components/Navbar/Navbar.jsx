/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import css from "./styles.module.css";

export const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div className={css.companyContainer}>
        <div className={css.logo}>
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <span className={css.companyName}>Agency</span>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <a href="#">About</a>
        </li>
        <li className={css.listItem}>
          <a href="#">Services</a>
        </li>
        <li className={css.listItem}>
          <a href="#">Pircing</a>
        </li>
        <li className={css.listItem}>
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className={css.button}>CONTACT</div>
    </div>
  );
};
