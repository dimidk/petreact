import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

export default function PageListing({ facilities }) {
  var facility = true;
  const services = ["Pet walking", "Take care daily", "Overnight stay"];
  const [selectedValue, setSelectedValue] = useState("");

  if (!Array.isArray(facilities)) return (facility = false);

  return (
    <div className="container-md">
      {facility ? (
        facilities.map((srv) => <Card srvname={srv.name} region="" mobile="" />)
      ) : (
        <div className="container-md">
          <label>Choose Facilities: </label>
          <select
            className="px-3 py-2 text-base border rounded-md transition border-primary focus:ring focus:ring-dark focus:outline-none text-gray-900"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            {services.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          {selectedValue !== "" ? (
            <ul className="list-inline">
              <li className="list-inline-item">
                <Card srvname={selectedValue} region="" mobile="" />
              </li>
            </ul>
          ) : (
            console.log("no service selected")
          )}
        </div>
      )}
    </div>
  );
}
