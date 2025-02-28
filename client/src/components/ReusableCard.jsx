import React from "react";
import { useState } from "react";
import "../styles/components/ReusableCard.css"; // Import styles

const ReusableCard = ({
  title,
  shortText,
  longText,
  Icon,
  bgColor,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      className="game-card"
      style={{ backgroundColor: bgColor }}
    >
      <div className="game-icon">
        <Icon
          width={180}
          height={180}
          className="svg-icon"
        />{" "}
        {/* ✅ Dynamic SVG */}
      </div>

      <div className="game-info">
        <h3 className="game-title">{title}</h3>
        <p className="game-short-text">
          {shortText}
        </p>

        {showMore && (
          <p className="game-long-text">
            {longText}
          </p>
        )}

        {/* "More" Clickable Element */}

        <div
          className="more-text"
          onClick={() => setShowMore(!showMore)}
        >
          {" "}
          {showMore ? "Show Less" : "More"}
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
