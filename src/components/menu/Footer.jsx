import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";

const Footer = () => {
  return (
    <div className="container justify-content-center my-5">
      <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; Created by,
            <FontAwesomeIcon icon={faHeart} color="red" />
          </span>
          <a
            href="www.newsit.gr"
            className="mb-2 me-3 mb-md-0 text-body-secondary text-decoration-none lh-1"
            target="_blank"
          >
            Dimitra Nteka
          </a>
        </div>
        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24" aria-hidden="true">
                <use xlink:href="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#" aria-label="Facebook">
              <svg className="bi" width="24" height="24">
                <use xlink:href="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
