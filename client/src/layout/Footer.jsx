import React from "react";
import "../styles/layout/Footer.css";
import UBLogo from "../assets/universitatbarcelona.svg";
import Casio from "../assets/Casio.svg";
import StartUB from "../assets/StartUB.png";
import gecon from "../assets/gecon.png";
import enti from "../assets/enti.png";
import AccionCH from "../assets/AccionCH.svg";
import barcelonaActiva from "../assets/barcelonaActiva.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-item">
        <p>Universitat de Barcelona</p>
        <img
          src={UBLogo}
          alt="University of barcelona logo"
        />
      </div>
      <div className="footer-item">
        <p>StartUB</p>
        <img src={StartUB} alt="StartUB logo" />
      </div>
      <div className="footer-item">
        <p>Enti-UB</p>
        <img src={enti} alt="Enti logo" />
      </div>
      <div className="footer-item">
        <p>Barcelona Activa</p>
        <img
          src={barcelonaActiva}
          alt="Barcelona Activa logo"
        />
      </div>
      <div className="footer-item">
        <p>Accion contra el hambre</p>
        <img
          src={AccionCH}
          alt="Accion contra el hambre logo"
        />
      </div>
      <div className="footer-item">
        <p>Gecon España</p>
        <img src={gecon} alt="Gecon logo" />
      </div>
      <div className="footer-item">
        <p>Casio España</p>
        <img src={Casio} alt="Casio logo" />
      </div>
    </div>
  );
}

export default Footer;
