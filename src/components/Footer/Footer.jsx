import React, { useRef } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logoTransparente from './logoTransparente.png';
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Inicio",
    url: "#",
  },
  {
    display: "Cursos de inglés",
    url: "#refCursos",
  },
  {
    display: "Tips de Inglés",
    url: "#refTips",
  },
];

{/* */}const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">

          <h2 className=" d-flex align-items-center gap-1">

<img src={logoTransparente} style={{with:80, height:80}} />


{/*<i class="ri-pantone-line"></i> Learners.*/}
</h2>

            {/*<h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> Learners.
            </h2>*/}
            

            <div className="follows">
              <p className="mb-0">Siguenos en Facebook</p>
              <span>
                {" "}
                <a href="https://www.facebook.com/englishenlinnea">
                <i ><BsFacebook /></i>
                </a>
              </span>

              {/* <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i class="ri-twitter-line"></i>
                </a>
              </span>*/}

              
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explora</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>*/}

          <Col lg="3" md="6">
            <h6 className="fw-bold">Contacto</h6>

            <p>Guadalajara, Jalisco. México </p>
            <p> <a href="https://wa.me/523313547146"> <i > <BsWhatsapp /> </i> </a>+52 - 3313547146</p>
            <p>englishenlinnea@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
