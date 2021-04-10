import React from 'react';


const Info = () => {
    return (
        <div>
        <div className="about-box-main">
            <div className="container">
            <h2 className="noo-sh-title">
                <span>Terapias Físicas</span>
            </h2>
            <div className="row my-5">
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                    No te arriesgues y cuida tu salud<span></span>
                </h2>
                <p>
                    Las lesiones en el sistema musculo esquelético, así como la enfermedades congénitas, adquiridas y crónicas que lo afectan son bastante comunes.
                </p>
                <p>
                    Los músculos, huesos, tendones, ligamentos y articulaciones están expuestos a sufrir diferentes tipos de padecimientos que pueden afectarlos tanto temporal como permanentemente.
               </p>
               <p>
                    Toma tus precauciones y agenda tu cita con nosotros.
               </p>      
            </div>
            <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className=""
                    src="images/01.png"
                    alt=""
                    />
                </div>
            </div>
        </div>
        <div className="row my-5">
        <div className="col-lg-6">
                <div className="banner-frame">
                    <img
                    className="img-fluid"
                    src="images/02.png"
                    alt=""
                    />
                </div>
            </div>
                <div className="col-lg-6">
                <h2 className="noo-sh-title">
                   ¿Porque es importante la terapia física?<span></span>
                </h2>
                <p>
                Recuerda que una vez que has perdido movimiento o fuerza, dañando tu salud leve o severamente, puedes recuperarte con rehabilitación física que aquí te proporcionamos.
                </p>
                <p>
                   <strong>Serás atendido por terapeutas físicos con gran experiencia.</strong>
               </p>
                <ul>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Terapia ocupacional y de trabajo.
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Rehabilitación física para niños y adultos.
                        </p>
                    </li>
                    <li>
                        <p>
                            <i className="fas fa-check"/>{" "}
                            Ejercicios de relación, valoración, diagnóstico y terapias físicas para toda la familia.
                        </p>
                    </li>
                </ul>
                <div className="actions">
                        <a href="../contact-us">
                        ¡Agenda tu cita!
                        </a>
                </div>
                <style jsx>{`
                        .actions {
                            margin-top: 20px;
                            display: flex;
                            justify-content: flex-end;
                            }
                        .actions a {
                            color: #fff;
                            background: #f01b29;
                            padding: 16px 24px;
                            text-decoration: none;

                            margin: 0;
                            display: inline-block;
                            padding: 20px;
                            position: relative;
                            top: -20px;
                            left: -10px;
                            transform: rotateZ(-5deg);
                            box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
                            }
                            .actions a:hover{ 
                                
                                transform: scale(1.2)
                            }
                    `}
                    </style>
            </div>
         
        </div>
            
            {/* <OurTeam /> */}
        </div>
      </div>
        </div>
    );
}

export default Info;