import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { ModalProvider } from "./context/Modal";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  // restoreCSRF();

  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

ReactDOM.render(
  <React.StrictMode>
      <ModalProvider >
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <ToastContainer
        autoClose={2500}
        position="top-right"
        closeButton={false}
      />
        <Provider store={store}>
          <App />
        </Provider>
    </ThemeProvider>
      </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
