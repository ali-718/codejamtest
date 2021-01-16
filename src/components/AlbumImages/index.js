import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <img
      onClick={() => props.setImage()}
      className="albumImage"
      src={`${props.thumbnailUrl}.jpg`}
    />
  );
}
