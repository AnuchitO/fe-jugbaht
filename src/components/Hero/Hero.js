import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => (
  <div className={styles.root}>
    <div className={styles.labelAmount}>คุณได้เงินคืน</div>
    <div className={styles.labelAmount}>คุณต้องจ่ายเพิ่ม</div>
    <h1 className={styles.amount}>฿ 725.24</h1>
  </div>
);

export default Hero;
