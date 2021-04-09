import React from "react";

export default function HeroSlider() {
  return (
    <div id="slides-shop" className="cover-slides">
      <ul className="slides-container">
        <li className="text-left">
          <img src="images/servicios/01-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  Rehabilitación física <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  La rehabilitación ayuda a promover y lograr niveles óptimos de independencia física y a desarrollar las habilidades funcionales de las personas con discapacidades, así como también su ajuste psicológico, social y vocacional, ya que es una disciplina completa que influye en todos los aspectos del paciente.{" "}
                  {" "}
                  <br />
               
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-center">
          <img src="images/servicios/02-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  ¿Tienes un desgarro muscular? <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                <strong></strong> Acude con nosotros a las sesiones de fisioterapia y descubre los grandes beneficios que tendrá en el tratamiento de tu condición, eliminando las molestias y fortaleciendo tu fibra muscular.
                </p>
                <p>
                  <a className="btn hvr-hover" href="/our-services">
                    servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="text-right">
          <img src="images/servicios/03-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                  ¿quieres relajarte del estrés del día a día?<br />
                  </strong>

                </h1>
                <p className="m-b-40">
                  <br />
                  Nuestros terapeutas expertos pueden ayudarte con eso y muchas molestias más.
                  {" "}
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="text-right">
          <img src="images/servicios/04-min.jpg" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="m-b-20">
                  <strong>
                    <br />
                  </strong>
                </h1>
                <p className="m-b-40">
                  <br />
                  {" "}
                  <br />
                  
                </p>
                <p>
                  <a className="btn hvr-hover" href="#">
                    Servicios
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li> */}

      </ul>
      <div className="slides-navigation">
        <a href="#" className="next">
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <a href="#" className="prev">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
