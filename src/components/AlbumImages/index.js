import React from "react";
import "./style.css";

export default function index(props) {
  return (
    <img
      data-testid="albumImages"
      onClick={() => props.setImage()}
      className="albumImage"
      src={`${props.thumbnailUrl}.jpg`}
    />
  );
}
