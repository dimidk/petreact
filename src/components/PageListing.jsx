import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

export default function PageListing({ name }) {
  return (
    <div className="container">
      <FontAwesomeIcon icon={faCat} className="background-image" alt={name} />
      {/* {name} */}
    </div>
  );
}
