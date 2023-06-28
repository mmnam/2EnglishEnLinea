import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

import courso5 from "../../assests/images/curso5.png";
import courso3 from "../../assests/images/curso3.png";
import courso2 from "../../assests/images/courses2.jpg";
import desdeCero from "../../assests/images/desdeCero.jpg";
import A2 from "../../assests/images/a2.jpg";

const coursesData = [
  {
    id: "01",
    title: "Clases individuales personalizadas",
    
    lesson: "Clases individuales, conversacionales y personalizadas por Zoom. Incluye inglés de negocios. Costo: 230 pesos la hora.",
    
    imgUrl: courso5,
  },

  {
    id: "05",
    title: "Inglés Nivel A2 - Grupal - Sábados 9am",
    description: "Hola",
    lesson: " ",
    students: 12.5,
    rating: 5.9,
    imgUrl: A2,
  },

  {
    id: "04",
    title: "Inglés desde cero - Grupal - Martes 7pm",
    description: "Hola",
    lesson: " ",
    students: 12.5,
    rating: 5.9,
    imgUrl: desdeCero,
  },

  {
    id: "03",
    title: "Inglés intermedio B1 - Grupal",
    description: "Hola",
    lesson: "Clase por Zoom conversacional. También aprende inglés de negocios. Grupo reducido.",
    students: 12.5,
    rating: 5.9,
    imgUrl: courso2,
  },

  
  
];

const Courses = () => {
  return (
    <section>
      <Container>

      <Row>

      <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left">
                <h2>Cursos de inglés</h2>
                <p id='contacta'>
                Contacta por mensaje o llama por WhatsApp para obtener una clase prueba y evaluar tu nivel de inglés.
                </p>
              </div>

             {/* <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>*/}

              
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
      </Row>


      
      </Container>
    </section>
  );
};

export default Courses;
