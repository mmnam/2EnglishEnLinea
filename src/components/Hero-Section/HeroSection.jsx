import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div className="hero__content">
              <h2 className="mb-4 pt-4 hero__title">
              Aprende inglés <br /> en cualquier lugar <br /> en cualquier momento
              </h2>
              <p className="mb-5">
              Clases conversacionales grupales e individuales por Zoom. <br /> También aprende inglés de negocios.
              <br /> Preparación para exámenes y entrevistas de trabajo <br />
              ¡Agenda tu sesión gratis ahora por WhatsApp al 3313547146!
              </p>
            </div>
             {/*<div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>*/}
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
