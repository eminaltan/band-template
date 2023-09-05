import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components//header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
/* import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; */

import "./_index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
