import { useRef } from "react";
import "@google/model-viewer";
import { activateWebXR } from "@r2u/react-ar-components";
// import { ModelViewerElement } from '@r2u/react-ar-components'
import "./App.css";

function App() {
  const glb = "./assets/model.glb";
  const imageUrl = "https://via.placeholder.com/150";
  const viewerRef = useRef(null)
  const model = {
    resizable: true,
    name: 'Chair',
    description: 'Comfy chair',
    glb:
      './assets/model.glb',
    url: 'https://google.com',
    placement: 'floor',
  }

  return (
    <>
      <div>
      <button type="button" onClick={() => activateWebXR({ model })}>
        Floor
      </button>
        {/* <ModelViewer ref={viewerRef} src={glb} alt="3D model" poster={imageUrl}></ModelViewer> */}
      </div>
      <h1>Vite + React</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
