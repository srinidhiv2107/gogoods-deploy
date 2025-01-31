import React from 'react';
import "../styles/WhyChoose.css";
import whyChooseBG1 from "../images/whyChooseBG1.svg";
import whyChooseBG2 from "../images/whyChooseBG2.svg";

const WhyChoose = () => {
  const contents = [
    {
      heading: "Zero-Commission Model",
      content: "Every fare goes directly to the Champion without any deductions"
    },
    {
      heading: "Empowering Champions",
      content: "As the Champions are our heroes of every journey, we support them with the opportunity to thrive resulting in the BEST service everytime"
    },
    {
      heading: "Flexible options",
      content: "From scheduling deliveries to choosing routes, GoGoods adapts to your needs, offering convenience and control for everyone"
    },
    {
      heading: "Equal Importance",
      content: "Every Sender and Champion is a valued part of our ecosystem and we treat everyone with the respect and attention they deserve"
    },
    {
      heading: "Full Transparency",
      content: "No surprises—just clear fares, honest communication, and straightforward processes for everyone involved"
    }
  ];

  const cards = (number) => (
    <div className="card" key={number + 1}>
      <div className="content-1">
        <div className="number">{number}</div>
        <p>{contents[number].heading}</p>
      </div>
      <div className="content-2">{contents[number].content}</div>
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
        }}>{cards(0)}</div>
        <div style={{
          position: "absolute", top: "30.1rem", left: "91.8rem"
        }}>{cards(1)}</div>
        <div style={{
          position: "absolute", top: "69.5rem", left: "27.6rem"
        }}>{cards(2)}</div>
        <div style={{
          position: "absolute", top: "69.5rem", left: "116.2rem"
        }}>{cards(3)}</div>
        <div style={{
          position: "absolute", top: "107.2rem", left: "63.4rem"
        }}>{cards(4)}</div>
      </div>
    </div>
  );
};

export default WhyChoose;
