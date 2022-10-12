import React from "react";
import "./App.css";
import IMG1 from "./assets/image-qr-code.png";

function App() {
  return (
    <div className="container">
      <article className="container_item">
        <div className="container_item_image">
          <img src={IMG1} width="250" height="250" />
        </div>
        <h2>Improve your front-end skills by building projects</h2>
        <h3>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </h3>
      </article>
    </div>
  );
}

export default App;
