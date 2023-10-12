import React from "react";
import "./Destination.css";

function DestinationData(props) {
  return (
    <div className={props.cName}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </div>
  );
}

export default DestinationData;
