import React from "react";
import { EmojiFrownFill } from "react-bootstrap-icons";
import "./ErrorDisplay.scss";

function ErrorDisplay(props) {
  return (
    <div className="ErrorDisplay">
      <EmojiFrownFill size="10rem" className="d-block mx-auto" />
      <h1 className="display-3 text-center">{props.message}</h1>
    </div>
  );
}

export default ErrorDisplay;