import React from 'react'
import prueba from './prueba.png';
import { Col, Row } from 'reactstrap';
import guy from './guy.png'
import "./introduction.css";

export default function Introduction() {
  return (
    <div className='container-fluid introduccion' >

      <div className='row'>

      <div className='col'>
      <div className='aprende_ingles'>

              <h2 id='aprende_tit'>
              <b>Aprende inglés <br /> en cualquier lugar <br /> en cualquier momento</b>
              </h2>
              <p id='aprende_parr'>
              Clases conversacionales <b>grupales</b> e <b>individuales</b> por Zoom. <br /> También aprende inglés de <b>negocios</b>.
              <br /> Preparación para <b>exámenes</b> y <b>entrevistas de trabajo</b> <br />
              ¡Agenda tu sesión gratis ahora por <a id='enlace' href="https://wa.me/523313547146">WhatsApp</a> o <a id='enlace' href="https://www.facebook.com/englishenlinnea">Facebook</a>!
              </p>

      </div>     
      
      </div> 

      <div className='col text-center'>

      <img src={guy} id='guy' /* className='img-fluid' *//>      
      
      </div>  
      </div>
      



    </div>
  )
}
