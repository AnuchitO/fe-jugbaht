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
import ListHeader from "./components/ListHeader";
import ListItems from "./components/ListItems";
import styles from "./App.module.scss";
import "./styles.css";
import History from "./components/History";

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
          <Header />
          <Hero />
          <History />
        </div>
        <Footer />
      </ThemeProvider>
    </StylesProvider>
  );
}
