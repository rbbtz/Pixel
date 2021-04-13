import React, { useState } from "react";
import "../styles/pixel.scss";

export default function Pixel(props) {
  const { selectedColor } = props;
// pixel has a class name of pixel because many pixel will be used

  const [pixelColor, setPixelColor] = useState("#fff");
  // pixelColor property uses #fff state, the defualt color of white
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  function applyColor() { 
    setPixelColor(selectedColor);
    setCanChangeColor(false);
    // when clicked the applyColor function is called,
    // it's setting pixelColor property above, to the slectedColor which is passed
    // into the pixel. Once you hover and click with the selected color the effected
    // pixel(s) won't change again until they are drawn over with another color
  }

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }
  // temporarilty sets pixel color to the selected color

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    } 

    setCanChangeColor(true);
  }
  // checks to see if pixel color can be changed back

  return (
    <div
      className="pixel"
      onClick={applyColor}
      // turns on the color editing
      onMouseEnter={changeColorOnHover}
      // changes color of the pixel upon hovering
      onMouseLeave={resetColor}
      // calls the function reset color, when mouse is no longer hoovering
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
