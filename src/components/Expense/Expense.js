import React from "react";
import styles from "./Expense.module.scss";
import Badge from "@material-ui/core/Badge";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import {
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  FormControlLabel,
  Button,
  IconButton,
  Avatar,
  Radio,
  RadioGroup
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

  const options = [
    { value: "อื่นๆ" },
    { value: "น้ำปั่น" },
    { value: "ส้มตำ" },
    { value: "หมูกระทะ" },
    { value: "ทางด่วน" },
    { value: "ค่าโรงแรม" },
    { value: "เติมน้ำมัน" }
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
        <FormLabel className={styles.title}>จ่ายค่าอะไร</FormLabel>
        <div className={styles.description}>
          <FormControl className={styles.description}>
            <RadioGroup
              aria-label="description"
              name="description"
              // value={value}
              // onChange={handleChange}
            >
              {options.map(option => (
                <FormControlLabel
                  value={option.value}
                  control={<Radio />}
                  label={option.value}
                />
              ))}
            </RadioGroup>
            {/* TODO: add description by using comment */}
          </FormControl>
        </div>
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
