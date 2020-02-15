import React from "react";
import { Button } from "@material-ui/core";
import styles from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <div className={styles.root}>
      <div className={styles.jugbaht}>จั๊กบาท</div>
      <div className={styles.welcome}>ยิ๊นดีต็อนฮับ</div>
      <div className={styles.trip}>
        <Button
          variant="outlined"
          size="large"
          className={styles.createTripButton}
        >
          สร้างทริป
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
