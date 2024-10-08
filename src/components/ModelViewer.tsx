import "@google/model-viewer";
import { ModelViewerElement } from "@google/model-viewer";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": Partial<ModelViewerElement>;
    }
  }
}

import React from "react";

const ModelViewer = () => {
  return (
    <div id="model" className="select-none">
      <model-viewer
        id="model"
        src={"/robot.glb"}
        alt={`Robot 3D model`}
        poster={"/poster.png"}
        shadow-intensity="1"
        autoplay
      ></model-viewer>
    </div>
  );
};

export default ModelViewer;
