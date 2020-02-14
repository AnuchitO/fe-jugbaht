import React from "react";
import ListHeader from "../ListHeader";
import ListItems from "../ListItems";
import uuid from "uuid/v1";
import styles from "./History.module.scss";

const UserHistory = () => {
  const items = [
    {
      title: "ไก่ย่าง",
      description: "05 OCT | หน่อง | กบ, หน่อง, ต้อม",
      amount: 4750.01
    },
    {
      title: "น้ำปั่น",
      description: "05 OCT | หน่อง | กบ, หน่อง, ต้อม",
      amount: 250.01
    },
    { title: "ส้มตำ", description: "05 OCT | หน่อง | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | หน่อง | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | หน่อง | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | หน่อง | ทุกคน", amount: 1245.25 },
    { title: "ส้มตำ", description: "05 OCT | หน่อง | ทุกคน", amount: 1245.25 },
    {
      title: "กล้วยทอด",
      description: "05 OCT | หน่อง | ทุกคน",
      amount: 1245.25
    }
  ];

  return (
    <div className={styles.root}>
      <div className={styles.headerList}>
        <ListHeader
          title={"รายการใช้จ่าย"}
          total={items.length}
          color={"Green"}
        />
      </div>
      <div className={styles.history}>
        <ListItems items={items} />
      </div>
    </div>
  );
};

export default UserHistory;
