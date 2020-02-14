import React from "react";
import styles from "./Hero.module.scss";

const Hero = ({ title = "คุณต้องจ่ายเพิ่ม" }) => (
  <div className={styles.root}>
    <div className={styles.labelAmount}>{title}</div>
    <h1 className={styles.amount}>฿ 725.24</h1>
  </div>
);

export default Hero;
