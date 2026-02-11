import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/menu/Home.jsx";
import Login from "./components/menu/Login.jsx";
import Signup from "./components/menu/Signup.jsx";
// import { loginUser } from "./components/Login.jsx";
import About from "./components/menu/About.jsx";
import PetSitterHome, {
  loadData,
} from "./components/petsitter/PetSitterHome.jsx";
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PetSitterPage from "./components/PetSitterPage.jsx";

const defineRoutes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route
      path="/login"
      element={<Login message="Login to see your reservations!" />}
    />
    <Route
      path="/signup"
      element={<Signup />}
      //
    />
    <Route
      path="/petsitterpage"
      element={<PetSitterPage />}
      // action={loginUser}
    />
    <Route path="/about" element={<About />} />
    <Route
      path="/petsitterlink"
      element={<PetSitterPage />}
      // loader={loadData}
    />

    <Route
      path="/petsitterhome"
      element={<PetSitterHome />}
      loader={loadData}
    />
  </Route>,
);

const appRoute = createBrowserRouter(defineRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>,
);
