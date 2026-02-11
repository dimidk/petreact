import React from "react";
import PageHeading from "../PageHeading";
import PageListing from "../PageListing";

export default function Home() {
  return (
    <div className="home-container border my-5">
      <PageHeading title="Are you a Pet Sitter?? You are in the right place!">
        <span>Testing.....</span>
      </PageHeading>

      <PageListing
        name=""
        service={["Pet walking", "Overnight stay", "Take care daily"]}
      />
    </div>
  );
}
