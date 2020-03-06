import React from "react";
import styles from "./Trip.module.scss";
import { TextField, InputBase, Button } from "@material-ui/core";

const Trip = () => {
  return (
    <div className={styles.root}>
      <TextField fullWidth label="ซื่อทริป" variant="outlined" />
      <TextField
        fullWidth
        label="สมาชิกจั๊กคน"
        variant="outlined"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*"
        }}
      />
      <TextField fullWidth label="เจ้าซื่อหยัง" variant="outlined" />
      <Button fullWidth size="large" variant="outlined" color="primary">
        สร้าง
      </Button>
    </div>
  );
};

export default Trip;
