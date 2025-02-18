import React from "react";
import "../styles/components/Resource.css";

function Resource() {
  return (
    <div className="Resource">
      <div className="AI">
        <h2>CONTAMOS CON LA IA</h2>
        <div className="imgAi"></div>
        <p>
          Una IA entrenada con la base del marco
          EntreComp para poder guiar y empujar a
          cada emprendedor a mejorar y a
          desarrollar tu proyecto.
        </p>
      </div>
      <div className="Res">
        <h2>RECURSOS DISPONIBLES</h2>
        <div className="resourceImg"></div>
        <p>
          Playcomp tiene una recopilación de
          actividades, documentos y recursos para
          ayudarte a entender las competencias
          emprendedoras EntreComp y desarrollarlas
          también con amigos, grupos, aulas o
          donde quieras!
        </p>
      </div>
    </div>
  );
}

export default Resource;
