import React from "react";
import styles from "./Expense.module.scss";
import Badge from "@material-ui/core/Badge";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import {
  TextField,
  FormControl,
  FormHelperText,
  Button,
  IconButton,
  Avatar
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";

const MemberCheckbox = () => (
  <Checkbox
    icon={<FiberManualRecordSharpIcon className={styles.uncheckedIcon} />}
    checkedIcon={<CheckCircleRoundedIcon className={styles.checkedIcon} />}
  />
);

const Expense = () => {
  const members = [
    { name: "ต้อม" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "หน่อง" },
    { name: "กบ" },
    { name: "จุ้น" }
  ];

  return (
    <div>
      <div className={styles.root}>
        <div className={styles.title}>คุณจ่ายเงิน</div>
        <FormControl fullWidth className={styles.groupAmount}>
          <TextField
            className={styles.amount}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            label="จั๊กบาท"
            variant="outlined"
            fullWidth
          />
          {/* <FormHelperText>ค่าน้ำปั่น</FormHelperText> */}
        </FormControl>
        <div className={styles.note}>ค่าน้ำมัน</div>
        <div className={styles.title}>หารใครบ้าง</div>
        <div className={styles.members}>
          {members.map(member => (
            <div className={styles.member}>
              <IconButton>
                <Badge
                  className={styles.badge}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  badgeContent={<MemberCheckbox />}
                  overlap="circle"
                >
                  <Avatar>{member.name.slice(0, 1)}</Avatar>
                </Badge>
              </IconButton>
              <div>{member.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.save}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          className={styles.saveButton}
        >
          บันทึก
        </Button>
      </div>
    </div>
  );
};

export default Expense;
