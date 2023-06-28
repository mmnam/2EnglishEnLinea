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
              <h2 className="mb-4 hero__title">
              Aprende inglés <br /> en cualquier lugar <br /> en cualquier momento
              </h2>
              <p className="mb-5">
              Clases conversacionales <b>grupales</b> e <b>individuales</b> por Zoom. <br /> También aprende inglés de <b>negocios</b>.
              <br /> Preparación para <b>exámenes</b> y <b>entrevistas de trabajo</b> <br />
              ¡Agenda tu sesión gratis ahora por <a href="https://wa.me/523313547146">WhatsApp</a> o <a href="https://www.facebook.com/englishenlinnea">Facebook</a>!
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
