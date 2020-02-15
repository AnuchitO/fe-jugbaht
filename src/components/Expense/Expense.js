import React from "react";
import styles from "./Expense.module.scss";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
import { style } from "@material-ui/system";

const Expense = () => {
  return (
    <div className={styles.root}>
      <div className={style.title}>จดๆ</div>
      <form className={styles.root} noValidate autoComplete="off">
        <FormControl>
          <TextField id="outlined-basic" label="จั๊กบาท" variant="outlined" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <TextField id="outlined-basic" label="จั๊กบาท" variant="outlined" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
      </form>
    </div>
  );
};

export default Expense;
