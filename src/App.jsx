import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Outlet /> */}
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
