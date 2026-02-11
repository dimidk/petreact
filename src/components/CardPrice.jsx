import React from "react";
import { useState } from "react";
import axios from "axios";

export default function CardPrice({
  duration,
  price,
  handleDuration,
  handlePrice,
}) {
  const handleClick = async (e) => {
    e.preventDefault();

    const jsonFacility = {
      sitterLink: "test",
      facility: "test",
    };

    try {
      const resp = await axios.post(
        "http://localhost:8008/addSitterFacility",
        jsonFacility,
      );
      // return resp.data;
      return { result: "ok" };
    } catch (error) {
      throw new Response(error.message);
    }
  };

  return (
    // <div className="row gx-2 gy-2 mb-3 justify-content-center">
    // <div className="col-md-6 mb-3">
    // <div className="col-md-6 mb-3">
    <form method="POST">
      <div className="form-floating my-5">
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 30 minutes"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => handleDuration(e.target.value)}
        />

        <label
          htmlFor="duration"
          className="text-lg font-semibold text-primary"
        >
          Duration:
        </label>
      </div>

      <div className="form-floating my-5">
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 10 euro"
          id="price"
          name="price"
          onChange={(e) => handlePrice(e.target.value)}
          value={price}
        />
        <label htmlFor="price" className="form-label">
          Price:
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          name="addFacility"
          id="addFacility"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Facility
        </button>
      </div>
    </form>
    // </div>

    //     {/* <p>Duration: {duration}</p>
    //   <p>Price: {price}</p> */}
    //   </div>
    // </div>
  );
}
