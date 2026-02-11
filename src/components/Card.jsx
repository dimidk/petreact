import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faAddressCard,
  faPersonWalking,
  faHandsHoldingChild,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import CardPrice from "./CardPrice";

export default function Card({ srvname, region, mobile }) {
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);

  function handleDurationValue(inputValue) {
    setDuration(inputValue);
    console.log(duration);
  }

  function handlePriceValue(inputPrice) {
    setPrice(inputPrice);
    console.log(price);
  }

  return (
    <div className="container-md">
      <div className="card">
        <div className="card-title">{srvname}</div>

        <div className="card-body">
          <div className="col-md-6 mb-3">
            {srvname.includes("walking") ? (
              <FontAwesomeIcon icon={faPersonWalking} className="fa-icon" />
            ) : srvname.includes("care") ? (
              <FontAwesomeIcon icon={faHandsHoldingChild} className="fa-icon" />
            ) : srvname.includes("stay") ? (
              <FontAwesomeIcon icon={faMoon} className="fa-icon" />
            ) : (
              <FontAwesomeIcon icon={faAddressCard} className="fa-icon" />
            )}
          </div>

          {mobile === "" ? (
            // <div className="col-md-6 mb-3">
            // <div className="row gx-2 gy-2 mb-3 justify-content-center">
            <div className="col-md-6 mb-3">
              <CardPrice
                duration={duration}
                price={price}
                handleDuration={(duration) => handleDurationValue(duration)}
                handlePrice={(price) => handlePriceValue(price)}
              />

              <div className="card-footer">
                <button
                  className="btn-outline-primary"
                  type="submit"
                  name="selectService"
                  id="selectService"
                >
                  Select Service
                </button>
              </div>

              {/* </div>s */}
            </div>
          ) : (
            // </div>
            <div className="row">
              <p>email: {region}</p>
              <p>mobile: {mobile}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
