import React from 'react'
import styles from "./Expense.module.scss";
import { Button, ThemeProvider, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, FormControlLabel, Checkbox, ExpansionPanelActions } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MonetizationOnRoundedIcon from "@material-ui/icons/MonetizationOnRounded";
import {
  ListItemText,
  Chip,
  MenuItem,
  Avatar,
  ListItemAvatar,
  ListItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList
} from "@material-ui/core";

const Payer = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={styles.payerContainer}>
      <ExpansionPanel expanded={expanded} onChange={() => setExpanded(!expanded)} classes={{
        rounded: styles.expansionPanel
      }}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon color="primary" />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div className={styles.payer}>
            <ListItem
              button
              disableGutters={true}
              aria-haspopup="true"
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
              />
            </ListItem>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={styles.payer}>
            <ListItem
              button
              disableGutters={true}
              aria-haspopup="true"
              onClick={() => setExpanded(false)}
            >
              <ListItemAvatar className={styles.payerIconContainer}>
                <Avatar className={styles.badgeIcon} />
              </ListItemAvatar>
              <ListItemText
                primary={<div className={styles.payerName}>เขียบ</div>}
              />
            </ListItem>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Payer;