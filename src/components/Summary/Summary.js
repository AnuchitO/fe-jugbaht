import React from "react";
import styles from "./Summary.module.scss";

import {
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const Summary = () => {
  const items = [
    { payer: "เขียบ", receiver: "หน่อง", amount: 999.88 },
    { payer: "เขียบ", receiver: "หน่อง", amount: 999.88 },
    { payer: "เขียบ", receiver: "หน่อง", amount: 999.88 },
    { payer: "เขียบ", receiver: "หน่อง", amount: 999.88 }
  ];
  return (
    <div className={styles.root}>
      <div className={styles.underHerder} />
      <div className={styles.items}>
        {items.map(item => (
          <div className={styles.item}>
            <div className={styles.left}>
              <ListItemAvatar>
                <Avatar />
                <ListItemText primary={<div>{item.payer}</div>} />
              </ListItemAvatar>
            </div>
            <div className={styles.middle}>
              <ListItemIcon>
                <DoubleArrowIcon />
                <DoubleArrowIcon />
              </ListItemIcon>
            </div>
            <div className={styles.middle}>
              <div className={styles.title}>฿ {item.amount.toFixed(2)}</div>
              {/* <div className={styles.helper}>15 Mar 2020, 8:20PM</div> */}
            </div>
            <div className={styles.middle}>
              <ListItemIcon>
                <DoubleArrowIcon />
                <DoubleArrowIcon />
              </ListItemIcon>
            </div>
            <div className={styles.right}>
              <ListItemAvatar>
                <Avatar />
                <ListItemText primary={<div>{item.receiver}</div>} />
              </ListItemAvatar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
