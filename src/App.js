import React from 'react';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import WhyChoose from "./components/WhyChoose";
import Vehicles from "./components/Vehicles";
import Work from "./components/Work";
import Feedback from "./components/Feedback";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <AboutUs />
      <WhyChoose />
      <Vehicles />
      <Work />
      <Feedback />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
