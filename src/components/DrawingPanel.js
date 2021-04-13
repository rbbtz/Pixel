import React, { useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";
// here the app is enabled to save generated images as PNG image files

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;

  const panelRef = useRef();

  let rows = [];
  // An array of rows

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }
// a for loop that that iterates and passes props

  return (
    <div id="drawingPanel">
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
      // creates UX component to click a button to save image as PNG file.
    </div>
  );
}
