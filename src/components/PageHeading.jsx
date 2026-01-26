import React from "react";

export default function PageHeading({ title, children }) {
  return (
    <div className="container my-5">
      <h1 className="my-5">{title}</h1>
      {children}
    </div>
  );
}
