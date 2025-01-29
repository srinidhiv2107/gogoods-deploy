import React from 'react';
import "../styles/WhyChoose.css";
import whyChooseBG1 from "../images/whyChooseBG1.svg";
import whyChooseBG2 from "../images/whyChooseBG2.svg";

const WhyChoose = () => {
  const cards = (number, heading) => (
    <div className="card" key={number}>
      <div className="content-1">
        <div className="number">{number}</div>
        <p>{heading}</p>
      </div>
      <div className="content-2">
        Lorem ipsum dolor sit amet consectetur. Dictum pulvinar purus praesent tempus eros consequat imperdiet.
      </div>
    </div>
  )

  return (
    <div className="why-choose-wrapper">
      <div className="why-choose">
        <div className="title">
          <p>Why to Choose <span>GoGoods?</span></p>
        </div>
        <img className="why-choose-bg1" src={whyChooseBG1} alt="bg1"/>
        <img className="why-choose-bg2" src={whyChooseBG2} alt="bg2"/>
        <div style={{
          position: "absolute", top: "30.1rem", left: "3.2rem"
        }}>{cards(1, "Zero-Commission Model")}</div>
        <div style={{
          position: "absolute", top: "30.1rem", left: "91.8rem"
        }}>{cards(2, "Empowering Champions")}</div>
        <div style={{
          position: "absolute", top: "69.5rem", left: "27.6rem"
        }}>{cards(3, "Flexible options")}</div>
        <div style={{
          position: "absolute", top: "69.5rem", left: "116.2rem"
        }}>{cards(4, "Equal Importance")}</div>
        <div style={{
          position: "absolute", top: "107.2rem", left: "63.4rem"
        }}>{cards(5, "Full Transparency")}</div>
      </div>
    </div>
  );
};

export default WhyChoose;
