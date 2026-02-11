import React from "react";

export default function PageHeading({ title, children }) {
  return (
    <div className="container-md">
      <h1 className="my-1">{title}</h1>
      {children}
    </div>
  );
}
