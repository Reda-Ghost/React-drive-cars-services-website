import React from "react";

const Helmet = (props) => {
  document.title = "Drive Cars Service - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
