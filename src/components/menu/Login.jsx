import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useNavigation } from "react-router-dom";
import { useRef, useState } from "react";
import apiClient from "../../api/apiClient";
import axios from "axios";

export default function Login({ message }) {
  const navigation = useNavigate();

  const formRef = useRef("");
  const [username, setUsername] = useState("");
  const [petlink, setPetlink] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(username, petlink);
    if (username === "" || petlink === "") {
      return navigation("/login");
    }

    try {
      let url = "http://localhost:8008/sitter/link/" + petlink;
      const resp = await axios.get(url);

      // const resp = apiClient.get(url);

      console.log("this is the requested url " + url);
      console.log("these are the response data " + resp.data);
      console.log("in details " + resp.data.name + " " + resp.data.mobile);
      const username = resp.data.name;
      const petSitterJson = {
        sittername: resp.data.name,
        email: resp.data.email,
        mobile: resp.data.mobile,
        petlink: resp.data.petlink,
      };

      // navigation("/petsitterpage", { state: petSitterJson });

      console.log(
        "petSitterJson object " +
          petSitterJson.sittername +
          " " +
          petSitterJson.email,
      );

      navigation("/petsitterhome", { state: petSitterJson });
    } catch (error) {
      console.log("ERRORORORROR!!!!");
      throw new Response(error.message);
    }

    // console.log(resp);
  };

  return (
    <div className="container-md">
      <h5>{message}</h5>
      <form className="row g-3" action=""></form>

      <div className="row gx-2 gy-2 mb-3 justify-content-center">
        <div className="col-lg-6 mb-3">
          <form method="POST">
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
                onChange={(e) => setPetlink(e.target.value)}
                value={petlink}
              />
              <label htmlFor="petlink" className="form-label">
                PetLink:
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Send!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
