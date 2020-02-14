import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import Avatar from "@material-ui/core/Avatar";
import styles from "./ListItems.module.scss";

const examples = [
  {
    title: "เนื้อย่าง",
    description: "05 OCT | กบ, หน่อง, ต้อม",
    amount: 4750.01
  },
  { title: "เติมน้ำมัน", description: "05 OCT | ทุกคน", amount: 1245.25 }
];

const ListItems = ({ items = examples || [] }) => {
  return (
    <List>
      {items.map((item, index) => (
        <Fragment>
          <ListItem className={styles.listItem}>
            <ListItemIcon>
              <FastfoodRoundedIcon fontSize="large" light={true} />
            </ListItemIcon>
            <ListItemText primary={item.title} secondary={item.description} />
            <div className={styles.amount}>{item.amount}</div>
          </ListItem>
          {index !== items.length - 1 ? <Divider variant={"middle"} /> : null}
        </Fragment>
      ))}
    </List>
  );
};

export default ListItems;
