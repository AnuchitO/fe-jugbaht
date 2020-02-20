import React from "react";
import styles from "./Expense.module.scss";
import Badge from "@material-ui/core/Badge";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  ListItemText,
  Divider,
  FormControlLabel,
  Button,
  Chip,
  IconButton,
  Icon,
  Menu,
  MenuItem,
  Avatar,
  Radio,
  RadioGroup,
  ListItemAvatar,
  ListItem,
  List,
  InputBase
} from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import Checkbox from "@material-ui/core/Checkbox";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import ListItems from "../ListItems/ListItems";
import Note from "./Note";

const MemberCheckbox = () => (
  <Checkbox
    icon={<FiberManualRecordSharpIcon className={styles.uncheckedIcon} />}
    checkedIcon={<CheckCircleRoundedIcon className={styles.checkedIcon} />}
  />
);

const Expense = () => {
  const members = [
    { name: "ต้อม" },
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
        {/* <div className={styles.title}>จดๆ ค่าใช้จ่าย</div> */}
        <hr className={styles.closeButton} />
        <div className={styles.payer}>
          {/* TODO: use selected menus to change payer https://material-ui.com/components/menus/#selected-menus */}
          <ListItem
            button
            disableGutters={true}
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="หน่อง"
            // onClick={handleClickListItem}
          >
            <ListItemAvatar className={styles.payerIconContainer}>
              <Avatar className={styles.payerIcon} />
            </ListItemAvatar>
            <ListItemText
              primary={<div className={styles.payerName}>หน่อง</div>}
              secondary={
                <Chip
                  className={styles.paymentIcon}
                  size="small"
                  variant="outlined"
                  icon={<MonetizationOnRoundedIcon />}
                  label="เงินสด"
                  clickable
                  color="primary"
                />
              }
              // secondary={options[selectedIndex]}
            />
            <ChevronRightIcon color="primary" />
          </ListItem>
        </div>
        <div fullWidth className={styles.groupAmount}>
          <InputBase
            fullWidth
            classes={{
              input: styles.amount
            }}
            placeholder="฿0.00"
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*"
            }}
          />
        </div>
        <div className={styles.note}>
          <Note />
        </div>
        <div className={styles.shareWithWhom}>หารผู้ใด๋แหน่</div>
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
                  <Avatar className={styles.badgeIcon}>
                    {member.name.slice(0, 1)}
                  </Avatar>
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
