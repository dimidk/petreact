import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { Form } from "react-router-dom";
import apiClient from "../../api/apiClient";
import axios from "axios";

export default function Signup() {
  const navigation = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    const jsonData = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
    };
    try {
      const resp = await axios.post(
        "http://localhost:8008/sitter/createlink",
        jsonData,
      );

      const data = resp.data;
      navigation("/petsitterhome", { state: data });
    } catch (error) {
      throw new Response(error.message);
    }
  };

  // function handleNameChange(event) {
  //   // console.log(event);
  //   event.preventDefault();

  //   setName(event.target.value);
  //   console.log(name);
  // }

  // function handleEmailChange(event) {
  //   // console.log(event);

  //   event.preventDefault();
  //   setEmail(event.target.value);
  //   console.log(email);
  // }

  return (
    <div className="container-md">
      <h4 className="my-5">
        Get a Link to multiply your customers and profits!!
      </h4>

      <div className="row gx-2 gy-2 mb-3 justify-content-center">
        <div className="col-lg-6 mb-3">
          <form method="POST">
            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="form-label">
                name:
              </label>
            </div>

            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="form-label">
                email:
              </label>
            </div>

            <div className="form-floating my-2">
              <input
                type="text"
                className="form-control"
                placeholder="699999999"
                home
                id="mobile"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <label htmlFor="mobile" className="form-label">
                mobile:
              </label>
            </div>

            <div className="form-floating my-2">
              <input
                type="password"
                className="form-control"
                placeholder="......"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="form-label">
                password:
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="button"
                onClick={handleRegistration}
              >
                Get A Link!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

//with the same names of tags we can read the data
//from formData.
// export async function signupAction({ request, params }) {
//   console.log("request data" + request + " " + params);
//   const data = await request.formData();

//   const signData = {
//     name: data.get("name"),
//     email: data.get("email"),
//     mobile: data.get("mobile"),
//     password: data.get("password"),
//   };

//   try {
//     apiClient.post("/sitter/createlink", signData);
//     return {
//       request: "true"

//     };
//   } catch (error) {
//     throw new Response(error.message || "there is an error ", { signData });
//   }
// }
