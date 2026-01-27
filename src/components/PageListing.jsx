import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

export default function PageListing({ name , service}) {

  if (!Array.isArray(service)) 
    return [];

  return (
    <div className="container">
      <FontAwesomeIcon icon={faCat} className="background-image" alt={name} />
      
      { service.length > 0 ? (
        service.map( (srv) => {

          <Card key={srv.serviceId} service={srv} />
        })
      ) 
      : (
        <p className="text-center font-primary font-bold">
          You haven't defined any service! Please {name} 
          give some services for your clients!
        </p>
      )}
    </div>
  );
}
