import React from "react";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import styles from "./App.module.scss";
import "./styles.css";
import History from "./components/History";
import Welcome from "./components/Welcome/Welcome";
import Expense from "./components/Expense/Expense";
import Summary from "./components/Summary";
import IndividualHistory from "./components/IndividualHistory";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2979ff"
    }
  },
  typography: {
    fontFamily: "'Prompt', sans-serif"
  }
});

export default function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={styles.root}>
          {/* <Welcome /> */}
          <Header title={"ทริปเขาภูเก็ต"} />
          {/* <Summary /> */}
          <Expense />
          {/* <Hero title={"คุณได้เงินคืน"} /> */}
          {/* <History /> */}
          {/* <Footer /> */}
          {/* <Hero title={"คุณจ่ายเงิน"} /> */}
          {/* <IndividualHistory /> */}
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}
