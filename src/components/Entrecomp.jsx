import React from "react";
import Entrecompsvg from "../assets/Entrecompsvg";
import "../styles/components/Entrecomp.css";

function Entrecomp() {
  return (
    <div className="Entrecomp">
      <div className="entreitems">
        <div>
          <h2>QUÉ ES ENTRECOMP</h2>
          <p>
            EntreComp es un marco de referencia
            completo, flexible y multipropósito
            diseñado para ayudar a entender lo que
            significa el emprendimiento como una
            competencia clave para el aprendizaje
            permanente y poder utilizarlo en el
            trabajo. Su objetivo es apoyar e
            inspirar acciones para mejorar la
            capacidad emprendedora de la
            ciudadanía y organizaciones europeas,
            y se puso en marcha en 2016 como parte
            de la New Skills Agenda for Europe.
            EntreComp crea una comprensión
            compartida de los conocimientos, las
            habilidades y las actitudes que
            conforman lo que significa ser una
            persona emprendedora - descubrir y
            actuar sobre las oportunidades e
            ideas, y transformarlas en valor
            social, cultural o económico u otros.
          </p>
        </div>
        <div>
          <h2>CÓMO FUNCIONA ENTRECOMP</h2>
          <p>
            Entrecomp se divide en 3 áreas de
            competencia que contienen las 15
            competencias emprendedoras. A su vez,
            cada competencia se divide en
            distintos indicadores claramente
            definidos en resultados de aprendizaje
            que aparecen reflejados a través de 8
            niveles de progresión (desde el nivel
            principiante hasta el experto).
          </p>
        </div>
      </div>
      <Entrecompsvg></Entrecompsvg>
    </div>
  );
}

export default Entrecomp;
