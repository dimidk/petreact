import React from "react";
import PageHeading from "./PageHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDongSign } from "@fortawesome/free-solid-svg-icons";
import PageListing from "./PageListing";
import { useLocation, useNavigation } from "react-router-dom";
import apiClient from "../api/apiClient";
import Card from "./Card";

export default function PetSitterPage({ name, region }) {
  const location = useLocation();
  const routerNavigate = useNavigation();

  const { sittername, email, mobile, petlink } = location.state || {};

  const message = "Welcome to PetSitter's detail page";

  //   console.log("trying to get value of name " + name + " " + username);
  //   const pathname = location.pathname;
  //   console.log(pathname);

  return (
    <div className="home-container container-md">
      <div className="my-5">
        {/* <PageHeading title={"Welcome to Pet Sitter Page"} /> */}
        <PageHeading title={message} />
        <Card srvname={sittername} region={email} mobile={mobile} />
      </div>
      <PageListing
        name={sittername}
        service={["Pet walking", "overnight stay", "Take care daily"]}
      />
    </div>
  );
}
