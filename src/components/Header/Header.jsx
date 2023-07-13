import React, { useRef } from "react";
import { Container } from "reactstrap";
import logo from './logoenglish2.png';
import "./header.css";
import { BsFacebook } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

const navLinks = [
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
  {
    display: <i className="mobile__menu" id='facebook'><BsFacebook /></i>,
    url: "https://www.facebook.com/englishenlinnea",
  },
];

const Header = () => {
  const menuRef = useRef();

  const refTips = useRef();
  const refCursos = useRef();

  const handleClick = () => {
    refCursos.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className=" ">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between pt-3">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">

              <img src={logo} style={{with:80, height:80}} />

              
              {/*<i class="ri-pantone-line"></i> Learners.*/}
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={handleClick}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <a href="https://www.facebook.com/englishenlinnea"> <i id='facebook'><BsFacebook /></i>   </a>

              </p>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
              <a href="https://wa.me/523313547146"> <i ><BsWhatsapp /> </i> </a>+52 - 3313547146 
                
              </p>
            </div>


          </div>

          <div className="mobile__menu">
            <span>
             <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;