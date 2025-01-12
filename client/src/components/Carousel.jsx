import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="Carousel">
      <div className="items">
        <div className="ideas">
          <div>
            {" "}
            <p>Spotting Opportunities </p>
          </div>
          <div>
            {" "}
            <p>Creativity </p>
          </div>
          <div>
            {" "}
            <p>Vision </p>
          </div>
          <div>
            {" "}
            <p>Valuing ideas </p>
          </div>
          <div>
            <p>
              Ethical and sustainable thinking{" "}
            </p>
          </div>
        </div>
        <div className="resources">
          <div>
            {" "}
            <p>Self-insight and self-efficacy </p>
          </div>
          <div>
            {" "}
            <p>Mobilising resources </p>
          </div>
          <div>
            {" "}
            <p>Motivation and perseverance </p>
          </div>
          <div>
            {" "}
            <p>
              Financial and economic literacy{" "}
            </p>
          </div>
          <div>
            {" "}
            <p>Mobilising others </p>
          </div>
        </div>
        <div className="action">
          <div>
            {" "}
            <p>Taking the initiative</p>
          </div>
          <div>
            {" "}
            <p>Planning and management</p>
          </div>
          <div>
            <p>
              Coping with ambiguity, uncertainty,
              and risk{" "}
            </p>
          </div>
          <div>
            {" "}
            <p>Working with others</p>
          </div>
          <div>
            {" "}
            <p>Learning through experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
