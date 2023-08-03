import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faFaceFrownOpen,
  faSmileWink,
} from "@fortawesome/free-solid-svg-icons";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  const change = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="container notFound mt-5">
      <div className="row alert">
        <h1>
          Alert! <FontAwesomeIcon icon={faBell} /> you might take the wrong
          turn!
        </h1>
      </div>
      <div className="row mt-5">
        <h3>
          <FontAwesomeIcon icon={faFaceFrownOpen} className="worry" /> Don't
          worry, I am Here to Help You!
        </h3>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-6">
          <button className="btn btn-primary btn-lg" onClick={change}>
            Click On Me !
            <FontAwesomeIcon icon={faSmileWink} className="wink ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
