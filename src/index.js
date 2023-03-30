import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "./theme";
import MotionLazyContainer from "./components/animate/MotionLazyContainer";
import NotistackProvider from "./components/SnackbarStyles";
import { SoldContextProvider } from "./context/SoldContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ThemeProvider>
        <NotistackProvider>
          <MotionLazyContainer>
            <SoldContextProvider>
              <App />
            </SoldContextProvider>
          </MotionLazyContainer>
        </NotistackProvider>
      </ThemeProvider>
    </BrowserRouter>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
