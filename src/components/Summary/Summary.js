import React from "react";
import styles from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={styles.root}>
      <div className={styles.underHerder} />
      <div className={styles.items}>
        {Array(100)
          .fill()
          .map(x => (
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.logo}>logo</div>
                <div>
                  <div className={styles.title}>Netflix</div>
                  <div className={styles.helper}>15 Mar 2020, 8:20PM</div>
                </div>
              </div>
              <div className={styles.right}>- $10</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;
