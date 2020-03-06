import React, { Fragment } from "react";
import ListHeader from "../ListHeader";
import ListItems from "../ListItems";
import styles from "./IndividualHistory.module.scss";
import { Collapse } from "@material-ui/core";

const IndividualHistory = () => {
  const items = [
    {
      title: "ปี้งไก่",
      payer: "ต้อม",
      divider: ["ต้อม", "กบ", "หน่อง"],
      date: "05 OCT",
      description: "05 OCT | ต้อม | กบ, หน่อง, ต้อม",
      amount: 1740.0
    },
    {
      title: "ตำบักหุง",
      payer: "ต้อม",
      divider: ["ต้อม", "กบ", "หน่อง"],
      date: "05 OCT",
      description: "05 OCT | ต้อม | ทุกคน",
      amount: 1245.25
    },
    {
      title: "กล้วยทอด",
      payer: "ต้อม",
      divider: ["ต้อม", "กบ", "หน่อง"],
      date: "05 OCT",
      description: "05 OCT | ต้อม | ทุกคน",
      amount: 1245.25
    },
    {
      payer: "หน่อง",
      title: "ตำบักหุง",
      divider: ["หน่อง", "ต้อม", "กบ"],
      date: "05 OCT",
      description: "05 OCT | ต้อม | ทุกคน",
      amount: 1245.25
    },
    {
      payer: "กบ",
      title: "ลาบ",
      divider: ["กบ", "ต้อม", "หน่อง"],
      date: "05 OCT",
      description: "05 OCT | ต้อม | ทุกคน",
      amount: 1245.25
    }
  ];

  const group = items.reduce((result, curr) => {
    const item = result[curr.payer] || {};
    item["payer"] = curr.payer;
    item["items"] = [...(item["items"] || []), curr];
    item["totalAmount"] = (item["totalAmount"] || 0) + curr.amount;
    result[curr.payer] = item;
    return result;
  }, {});

  const individuals = Object.keys(group).map(key => group[key]);

  return (
    <div className={styles.root}>
      <div className={styles.headerList}>
        {individuals.map(record => (
          <Fragment>
            <ListHeader
              title={record.payer}
              total={record.items.length}
              color={"Green"}
              amount={record.totalAmount}
            />
            <Collapse in={true} timeout="auto" unmountOnExit>
              <div className={styles.history}>
                <ListItems items={record.items} />
              </div>
            </Collapse>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default IndividualHistory;
