import React from "react";
import "./spinner.css";

export default function LoadingSpinner(props) {
  return (
    <div className={props.className}>
      <div className="loading-spinner">
      </div>
    </div>
  );
}
