import React from "react";
import "../styles/components/ProfileComp.css";
import Placeholder from "../assets/Placeholder.jpg";

function ProfileComp() {
  return (
    <div className="ProfileComp">
      <div>
        <img
          src={Placeholder}
          alt="Skills metrics"
        />
      </div>
      <div className="profileText">
        <h2>PERFIL DE COMPETENCIAS</h2>
        <p>
          Juegues a lo que juegues siempre aportas
          al desarrollo de tus competencias
          emprendedoras. Ya que Playcomp siempre
          recoge la información necesaria para
          mostrar un perfil de competencias
          emprendedoras y su desarrollo. Compara y
          mejora tus competencias con otros
          emprendedores!
        </p>
      </div>
    </div>
  );
}

export default ProfileComp;
