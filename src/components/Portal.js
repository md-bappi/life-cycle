import React from "react";
import ReactDOM from "react";

const Portal = () => {
  return ReactDOM.createPortal(
    <h1>Portal</h1>,
    document.getElementById("another-root")
  );
};

export default Portal;

// problem: not rendering element
