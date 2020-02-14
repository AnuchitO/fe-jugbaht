import React from "react";
import styles from "./Header.module.scss";

const Header = ({ title = "" }) => (
  <div className={styles.root}>
    <div className={styles.trip}>{title}</div>
  </div>
);

export default Header;
