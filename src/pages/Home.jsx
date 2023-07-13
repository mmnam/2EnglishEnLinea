import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Courses from "../components/Courses-section/Courses";
import Features from "../components/Feature-section/Features";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Introduction from "../components/Introduction/Introduction";
import Tips from "../components/Tips/Tips";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Introduction />
      
      {/* <HeroSection />*/}
      {/* <CompanySection />*/}

      {/* <AboutUs />*/}
      
      <Courses />

      {/* <ChooseUs />*/}
      
      <Features />

      {/* <FreeCourse />*/}
      {/* <Testimonials />*/}
      <Tips />
      
      {/* <Newsletter /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
