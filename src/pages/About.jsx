import React from "react";
import "../styles/pages/About.css";
import Platform from "../components/Platform";
import Catalog from "../components/Catalog";
import ProfileComp from "../components/ProfileComp";
import Resource from "../components/Resource";
import Roadmap from "../components/Roadmap";
import Entrecomp from "../components/Entrecomp";

function About() {
  return (
    <div className="About">
      <Platform></Platform>
      <Catalog></Catalog>
      <ProfileComp></ProfileComp>
      <Resource></Resource>
      <Roadmap></Roadmap>
      <Entrecomp></Entrecomp>
    </div>
  );
}

export default About;
