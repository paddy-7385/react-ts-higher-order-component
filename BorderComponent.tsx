import React, { Component } from "react";

import LoggerHoc from "./LoggerHoc";

let borderComponent = function BorderComponent(props) {
  return (
    <div style={{ backgroundColor: "red", padding: 10 }}>
      <div style={{ backgroundColor: "green", padding: 10 }}>
        {props.children}
      </div>
    </div>
  );
};

export default LoggerHoc(borderComponent);
