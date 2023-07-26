import Image from "next/image";

export default function Home() {
  return (
    <div id="main-container">
      <div id="primer-contenedor">
        <div id="contenedor-usuario">
          <Image src="/image-jeremy.png" width={70} height={70} alt="Foto Jeremy Robson" id="img-usuario" />
          <div id="usuario-datos">
            <p>Report for</p>
            <p id="usuario-nombre">Jeremy Robson</p>
          </div>          
        </div>
        <div id="contenedor-periodos">
          <a>Dayly</a>
          <a>Weekly</a>
          <a>Monthly</a>
        </div>          
      </div>
      <div id="segundo-contenedor">
        <div className="card">
          <Image src="/icon-work.svg" width={70} height={70} alt="icon-work" className="icons" />
          <div className="botton-card">
            <div className="card-title">
              <p>Work</p>
              <Image src="/icon-ellipsis.svg" width={20} height={5} alt="icon-ellipsis" className="icon-puntos" />
            </div>
            <div className="card-data">
              <p className="horas">32hrs</p>
              <p className="previous-data">
                Last Week - 36 hrs
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <Image src="/icon-work.svg" width={70} height={70} alt="icon-work" className="icons" />
          <div className="botton-card">
            <div className="card-title">
              <p>Work</p>
              <Image src="/icon-ellipsis.svg" width={20} height={5} alt="icon-ellipsis" className="icon-puntos" />
            </div>
            <div className="card-data">
              <p className="horas">32hrs</p>
              <p className="previous-data">
                Last Week - 36 hrs
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          
          <Image src="/icon-work.svg" width={70} height={70} alt="icon-work" className="icons" />
          <div className="botton-card">
            <div className="card-title">
              <p>Work</p>
              <Image src="/icon-ellipsis.svg" width={20} height={5} alt="icon-ellipsis" className="icon-puntos" />
            </div>
            <div className="card-data">
              <p className="horas">32hrs</p>
              <p className="previous-data">
                Last Week - 36 hrs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
