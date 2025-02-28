import React from "react";

import AnimatedText from "./AnimatedText";
import "../styles/components/AnimatedText.css";
import "../styles/components/Platform.css";

function Platform() {
  return (
    <div className="Platform">
      <AnimatedText
        el="h2"
        text={[
          `La primera plataforma de videojuegos que
        evalúa y desarrolla las competencias
        emprendedoras laborales basadas en el marco EntreComp.`,
        ]}
        className="animated-text"
        repeatDelay={5000}
      />
      <p></p>
    </div>
  );
}

export default Platform;
