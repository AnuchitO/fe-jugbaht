import React from "react";
import styles from "./ListHeader.module.scss";

const numberWithCommas = num => {
  var parts = num.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const ListHeader = ({
  title = "",
  total,
  color = "Green",
  amount = 4750.3
}) => {
  const amountStyle = styles["amount" + color];
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.title}>{title}</div>
        <div className={styles.transaction}>{total} รายการ</div>
      </div>
      <div className={amountStyle}>฿ {numberWithCommas(amount)}</div>
    </div>
  );
};

export default ListHeader;
