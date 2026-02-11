import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/menu/Header";
import Footer from "./components/menu/Footer";
import Home from "./components/menu/Home";
import "bootstrap/dist/css/bootstrap.min.css";
//this is going to be used to navigate upon user's action.
import { useNavigation } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      {/* <Home /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
