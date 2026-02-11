import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-router-dom";

import axios from "axios";
import { useAuth } from "../../auth/authService";
import PageTitle from "../PageTitle";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = await loginUser(username, password);

    setUsername(userData.name);

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/petsitterhome");
  };

  return (
    <div className="container-md">
      <PageTitle title="Login Page" />

      <div className="row gx-2 gy-2 mb-3 justify-content-center">
        <div className="col-lg-6 mb-3">
          <Form method="POST" onSubmit={handleSubmit}>
            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. didid"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username" className="form-label">
                Username:
              </label>
            </div>

            <div className="form-floating my-5">
              <input
                type="password"
                className="form-control"
                placeholder="....."
                id="petlink"
                name="petlink"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label htmlFor="petlink" className="form-label">
                PetLink:
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={handleClick}
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export async function loginUser(user, password) {
  try {
    const resp = await axios.post("http://localhost:8008/sitter", {
      name: user,
      email: "",
      mobile: "",
      password: password,
    });
    return resp.data;
  } catch (error) {
    throw new Response(error.message);
  }
}
