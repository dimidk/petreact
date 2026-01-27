import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import About from "./components/About.jsx";
import axios from "axios";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const defineRoutes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route
      path="/login"
      element={<Login message="Login to see your reservations!" />}
    />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
  </Route>,
);

const appRoute = createBrowserRouter(defineRoutes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>,
);
