import React from "react";

export default function Login({ message }) {
  return (
    <div className="container-md">
      <h5>{message}</h5>
      <div className="row gx-2 gy-2 mb-3 justify-content=center">
        <div className="col-lg-6">
          <form action="">
            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                placeholder="e.g. didid"
              />
              <label htmlFor="username" className="form-label">
                Username:
              </label>
            </div>

            <label htmlFor="passwd" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="....."
            />
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
