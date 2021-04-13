import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel";

export default function Row(props) {
  const { width, selectedColor } = props;

  let pixels = [];
  // an empty array of pixels

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }
  // for loop established

  return <div className="row">{pixels}</div>;
}

// class name row, which will be reused by usiing different rows,
// when they are stacked ontop of eachother they will create a pixel grid
// with the height and width option presented before beginning