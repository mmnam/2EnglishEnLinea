import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from '../Header/logoenglish2.png';

import "./footer.css";

const footerQuickLinks = [
  {
    display: "Inicio",
    url: "#",
  },
  {
    display: "Información",
    url: "#",
  },

  {
    display: "Cursos de inglés",
    url: "#",
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

<img src={logo} style={{with:80, height:80}} />


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
                  <i class="ri-facebook-line"></i>
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

            <p>Guadalajara, Jalisco.</p>
            <p> WhatsApp: +52 3313547146</p>
            <p>Email: englishenlinnea@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
