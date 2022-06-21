import React, { useEffect, Fragment } from "react";
import "./assets/css/main.css";
// import './assets/css/flexslider.css'
import Routes from "./routes";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import { BrowserRouter, useLocation } from "react-router-dom";


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
