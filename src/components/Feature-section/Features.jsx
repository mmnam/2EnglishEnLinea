import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Prepárate y habla inglés",
    desc: "",
    icon: "ri-draft-line",
  },

  {
    title: "Clases conversacionales para mejorar tu fluidez",
    desc: "",
    icon: "ri-discuss-line",
  },

  {
    title: "Agenda tu clase en diferentes horarios",
    desc: "",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6 id='titulo'>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
