import React, {useState} from 'react';
import "../styles/Work.css";
import appStoreIcon from "../images/appStoreIcon.svg";
import playStoreIcon from "../images/playStoreIcon.svg";
import championImage from "../images/championImage.svg";
import senderImage from "../images/senderImage.svg";
import individualImage from "../images/individualImage.svg";
import businessImage from "../images/businessImage.svg";

const Work = () => {
  const [type, setType] = useState("Individual");

  const cards = (heading, image) => (
    <div className="work-card" key={heading}>
      <img className="card-image" src={image} alt={heading}/>
      <div className="card-heading">{heading}</div>
      <div className="card-body">
        <div className="card-body-content">
          <p>GoGoods delivers an unparalleled customer service through dedicated customer teams, engaged people dedicated customer teams</p>
        </div>
        <div className="card-body-btns">
          <button className="app-store">
            <img className="app-store-icon" src={appStoreIcon} alt="App Store"/>
            Get On App Store
          </button>
          <button className="play-store">
            <img className="play-store-icon" src={playStoreIcon} alt="Play Store"/>
            Get On Play Store
          </button>
        </div>
      </div>
    </div>
  );

  const workBtn = (name) => (
    <button
      className={"work-btn" + (name === type ? " work-btn-active" : "")}
      onClick={() => setType(name)}
    >
      {name}
    </button>
  );

  return (
    <div id="championOrSender"  className="work">
      <p className="w-heading">How We Work?</p>
      <div className="work-cards-wrapper">
        {cards("Champions", championImage)}
        {cards("Sender", senderImage)}
      </div>
      <hr className="line"/>
      <div className="work-btns-wrapper">
        {workBtn("Individual")}
        {workBtn("Business")}
      </div>
      <div className="work-img-wrapper">
        {(type === "Individual")?
          <img className="work-img" src={individualImage} alt="Individual"/>:
          <img className="work-img" src={businessImage} alt="Business"/>
        }
      </div>
    </div>
  );
};

export default Work;
