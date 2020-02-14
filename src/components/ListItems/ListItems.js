import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodRoundedIcon from "@material-ui/icons/FastfoodRounded";
import styles from "./ListItems.module.scss";
import uuid from "uuid/v1";

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
          <ListItem className={styles.listItem} key={uuid()}>
            <ListItemIcon>
              <FastfoodRoundedIcon fontSize="large" light={true} />
            </ListItemIcon>
            <ListItemText primary={item.title} secondary={item.description} />
            <div className={styles.amount}>{item.amount}</div>
          </ListItem>
          {index !== items.length ? (
            <Divider variant={"middle"} key={uuid()} />
          ) : null}
        </Fragment>
      ))}
    </List>
  );
};

export default ListItems;
