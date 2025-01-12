import React from "react";
import "./Why.css";
function Why() {
  return (
    <div className="Why">
      <div className="whyItems">
        <div className="unis">
          {" "}
          <h2>FOR UNIVERSITIES</h2>
          <p>
            Playcomp es la forma más fácil de
            detectar a los potenciales
            emprendedores entre todos los alumnos
            de las facultades.
          </p>
        </div>
        <div className="incub">
          <h2>FOR INCUBATORS</h2>{" "}
          <p>
            El emprendimiento está en auge. Entra
            a PlayComp para encontrar los mejores
            proyectos y potenciales emprendedores
            para que aporten valor a tu red de
            crecimiento de empresas y StartUp’s.
          </p>
        </div>
        <div className="more">
          <h2>AND MUCH MORE</h2>
          <p>
            Pero PlayComp no es solo una
            plataforma para las aulas, todos
            necesitamos habilidades emprendedoras
            para el mundo laboral. ¡Únete a
            nosotros con tu plan gratuito para
            divertirte y conseguir tu perfil de
            habilidades!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
