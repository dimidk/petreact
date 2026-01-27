import React from "react";

export default function Signup() {
  return (
    <div className="container-md">
      <h4 className="my-5">
        Get a Link to multiply your customers and profits!!
      </h4>

      <div className="row gx-2 gy-2 mb-3 justify-content-center">
        <div className="col-lg-6 mb-3">
          <form action="">
            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="name"
              />
              <label htmlFor="name" className="form-label">
                name:
              </label>
            </div>

            <div className="form-floating my-5">
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="email"
              />
              <label htmlFor="email" className="form-label">
                email:
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-toggle="button"
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
