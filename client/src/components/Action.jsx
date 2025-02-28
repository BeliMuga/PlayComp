import React from "react";
import { Player } from "video-react";
import AnimatedText from "./AnimatedText";
import "../styles/components/Action.css";
import "../styles/components/AnimatedText.css";

function Action() {
  return (
    <div className="Action">
      <div className="lpAnimation"></div>
      {/* <Player
        playsInline
        src="HandController.mp4"
      /> */}

      <AnimatedText
        el="h1"
        text={["PLAY, LEARN,", `"LAUNCH"!`]}
        className="large-text"
        repeatDelay={10000}
      />

      <h2>
        The videogame platform that evaluates your
        entrepreneurial skills! <br /> Step into
        innovated education!
      </h2>
      <button> ¡EMPIEZA AHORA!</button>
    </div>
  );
}

export default Action;
