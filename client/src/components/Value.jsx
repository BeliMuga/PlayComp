import React from "react";
import "../styles/components/Value.css";
import { useState } from "react";
import ReusableCard from "./ReusableCard";
import EntrecompMedal from "../assets/EntrecompMedal.jsx";
import FunMedal from "../assets/FunMedal.jsx";
import GuideMedal from "../assets/GuideMedal.jsx";
import PlanetsMedal from "../assets/PlanetsMedal.jsx";

function Value() {
  return (
    <div className="Value">
      <ReusableCard
        title="Entrepreneurship Medal"
        shortText="Unlock the power of entrepreneurship through play."
        longText="This badge represents your ability to think critically, take risks, and innovate in an ever-changing world."
        Icon={FunMedal} // ✅ Pass different icons
        bgColor="#E9CA3C"
      />

      <ReusableCard
        title="Entrepreneurship Medal"
        shortText="Unlock the power of entrepreneurship through play."
        longText="This badge represents your ability to think critically, take risks, and innovate in an ever-changing world."
        Icon={EntrecompMedal} // ✅ Pass different icons
        bgColor="#6D57A1"
      />

      <ReusableCard
        title="Entrepreneurship Medal"
        shortText="Unlock the power of entrepreneurship through play."
        longText="This badge represents your ability to think critically, take risks, and innovate in an ever-changing world."
        Icon={PlanetsMedal} // ✅ Pass different icons
        bgColor="#627DBD"
      />
      <ReusableCard
        title="Entrepreneurship Medal"
        shortText="Unlock the power of entrepreneurship through play."
        longText="This badge represents your ability to think critically, take risks, and innovate in an ever-changing world."
        Icon={GuideMedal} // ✅ Pass different icons
        bgColor="#39AC56"
      />
    </div>
  );
}

export default Value;
