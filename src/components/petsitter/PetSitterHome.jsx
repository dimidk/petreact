import React, { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import PageTitle from "../PageTitle";
import Card from "../Card";
import PageListing from "../PageListing";
import axios from "axios";
import { useAuth } from "../../auth/authService";

export default function PetSitterHome() {
  const facilities = useLoaderData();

  const [selectedValue, setSelectedValue] = useState("");
  console.log("selected value " + selectedValue);

  const location = useLocation();
  console.log(location.pathname);

  const { name, email, mobile, petlink } = location.state || {};

  console.log("name from passing parameter " + name);

  return (
    <div className="container-md">
      <PageTitle title="Welcome to your home page" />

      {/* <Card srvname={name} region={email} mobile={mobile} /> */}
      <PageListing facilities={facilities} />
    </div>
  );
}

export function loadData() {
  try {
    let urlServices = "http://localhost:8008/sitter/services/" + petlink;
    const response = axios.get(urlServices);
    return response.data;
  } catch (error) {
    throw new Response(error.message);
  }
}
