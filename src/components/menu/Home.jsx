import React from "react";
import PageHeading from "../PageHeading";
import PageListing from "../PageListing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="home-container border my-5">
      <PageHeading title="Are you a Pet Sitter?? You are in the right place!">
        {/* <span>Testing.....</span> */}
        <FontAwesomeIcon className="fa-icon" icon={faCat} />
      </PageHeading>

      {/* <PageListing
        name=""
        service={["Pet walking", "Overnight stay", "Take care daily"]}
      /> */}
    </div>
  );
}
