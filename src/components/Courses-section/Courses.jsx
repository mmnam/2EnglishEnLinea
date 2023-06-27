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

const coursesData = [
  {
    id: "01",
    title: "Clases individuales personalizadas",
    
    lesson: "Clases individuales, conversacionales y personalizadas. Se toman por Zoom. Incluye inglés de negocios. Costo de 230 pesos la hora.",
    
    imgUrl: courso5,
  },

  {
    id: "02",
    title: "Clase grupal - inglés desde cero",
    description: "Hola",
    lesson: "Clase por Zoom conversacional. Grupos reducidos. Aprende las bases del inglés y comienza a hablar. ",
    students: 12.5,
    rating: 5.9,
    imgUrl: courso3,
  },

  {
    id: "03",
    title: "Clase grupal - inglés intermedio",
    description: "Hola",
    lesson: "Clase por Zoom conversacional. También aprende inglés de negocios. Grupos reducidos.",
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
              <div className="course__top__left w-50">
                <h2>Cursos de inglés</h2>
                <p>
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
