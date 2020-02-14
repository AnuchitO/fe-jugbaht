import React from "react";
import styles from "./Footer.module.scss";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import color from "@material-ui/core/colors/amber";

const Footer = () => (
  <div className={styles.root}>
    <div />
    <div className={styles.add}>
      <AddCircleRoundedIcon style={{ fontSize: 80, color: "#2979ff" }} />
    </div>
    <div />
  </div>
);

export default Footer;
