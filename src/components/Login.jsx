import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Login({ message }) {
  return (
    <div className="container-md">
      <h5>{message}</h5>
      <form className="row g-3" action=""></form>

      <div className="row gx-2 gy-2 mb-3 justify-content-center">
        <div className="col-lg-6 mb-3">
          <form action="">
            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. didid"
                id="username"
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
                id="passwd"
              />
              <label htmlFor="passwd" className="form-label">
                Password:
              </label>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
