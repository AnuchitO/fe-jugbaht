import React from "react";
import ListHeader from "../ListHeader";
import ListItems from "../ListItems";
import styles from "./History.module.scss";

const UserHistory = () => {
  const items = [
    {
      title: "ไก่ย่าง",
      description: "05 OCT | กบ, หน่อง, ต้อม",
      amount: 4750.01
    },
    {
      title: "น้ำปั่น",
      description: "05 OCT | กบ, หน่อง, ต้อม",
      amount: 250.01
    },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | ทุกคน", amount: 1245.25 }
  ];

  return (
    <div className={styles.root}>
      <ListHeader
        title={"รายการใช้จ่าย"}
        total={items.length}
        color={"Green"}
      />
      <div className={styles.history}>
        <ListItems items={items} />
      </div>
    </div>
  );
};

export default UserHistory;
