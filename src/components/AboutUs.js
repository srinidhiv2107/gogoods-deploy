import React from 'react';
import "../styles/AboutUs.css";
import IndiaOutline2 from "../images/IndiaOutline2.svg";

const AboutUs = () => {
  return (
    <div id="about us" className="about-us">
      <div className="content">
        <p className="content-1">GoGoods</p>
        <p className="content-2">Seamless Transport Solutions</p>
        <p className="content-3">Connecting businesses with drivers easily</p>
        <p className="content-4">
          At GoGoods, our mission is simple — to empower drivers partners (our Champions) while delivering seamlessly for individuals and small businesses. We are a zero-commission platform letting Champions keep 100% of their earnings. By cutting out the middlemen and ensuring complete transparency, we eliminate hidden fees and unfair deductions. More than being a delivery platform, GoGoods is building a trusted community— fostering open communication, reliability, and shared success without interference. Together, we move ahead
        </p>
        <button className="read-more">
          Read More
        </button>
      </div>
      <img className="india-outline-2" src={IndiaOutline2} alt="India Outline"/>
    </div>
  );
};

export default AboutUs;
