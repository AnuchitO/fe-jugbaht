import React from "react";
import styles from "./Expense.module.scss";
import Badge from "@material-ui/core/Badge";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  FormControl,
  FormLabel,
  FormHelperText,
  ListItemText,
  FormControlLabel,
  Button,
  IconButton,
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
import Checkbox from "@material-ui/core/Checkbox";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import ListItems from "../ListItems/ListItems";

const MemberCheckbox = () => (
  <Checkbox
    icon={<FiberManualRecordSharpIcon className={styles.uncheckedIcon} />}
    checkedIcon={<CheckCircleRoundedIcon className={styles.checkedIcon} />}
  />
);

const Description = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    { value: "อื่นๆ" },
    { value: "อาหารค่ำ" },
    { value: "น้ำปั่น" },
    { value: "ส้มตำ" },
    { value: "หมูกระทะ" },
    { value: "ทางด่วน" },
    { value: "ค่าโรงแรม" },
    { value: "เติมน้ำมัน" }
  ];

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <ListItemText
            disableTypography={true}
            className={styles.description}
            primary={options[selectedIndex].value}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.value}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
          >
            {option.value}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

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
        <div className={styles.title}>จดๆ ค่าใช้จ่าย</div>
        <div className={styles.payer}>
          {/* TODO: use selected menus to change payer https://material-ui.com/components/menus/#selected-menus */}
          <List component="nav" aria-label="payer">
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
                primary="หน่อง"
                secondary={"เป็นคนจ่ายเงิน"}
                // secondary={options[selectedIndex]}
              />
            </ListItem>
          </List>
        </div>
        <FormControl fullWidth className={styles.groupAmount}>
          <InputBase
            className={styles.amount}
            fullWidth
            placeholder="0.00"
            inputProps={{
              inputMode: "numberic",
              pattern: "[0-9]*",
              "aria-lable": "amount"
            }}
          />
          {/* <FormHelperText>ค่าน้ำปั่น</FormHelperText> */}
        </FormControl>
        <div className={styles.description}>
          <Description />
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
