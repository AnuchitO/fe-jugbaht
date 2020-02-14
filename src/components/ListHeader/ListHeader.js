import React from "react";
import styles from "./ListHeader.module.scss";

const ListHeader = ({ title = "", total, color = "Green" }) => {
  const amountStyle = styles["amount" + color];
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.transaction}>{total} TRANSACTION</div>
      </div>
      <div className={amountStyle}>฿ 4,750.00</div>
    </div>
  );
};

export default ListHeader;
