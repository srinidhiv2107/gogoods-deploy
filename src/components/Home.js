import React from 'react';
import "../styles/Home.css";
import homeBG from "../images/homeBG.svg";
import IndiaOutline from "../images/IndiaOutline.svg";
import championIcon from "../images/championIcon.svg";
import senderIcon from "../images/senderIcon.svg";

const Home = () => {
  return (
    <div id="home" className="home">
      <img className="home-bg" src={homeBG} alt="Background Circle"/>
      <div className="content">
        <div className="top-content">
          <p>Your Delivery, <span>Our Purpose</span></p>
        </div>
        <div className="mid-content">
          <p>On-demand vehicles and seamless delivery solutions for <span>individuals</span> and <span>small businesses</span>.
          </p>
        </div>
        <div className="buttons">
          <button className="download-champion-btn">
            Download Champion App
          </button>
          <button className="download-sender-btn">
            Download Sender App
          </button>
        </div>
      </div>
      <img className="india-outline" src={IndiaOutline} alt="India Outline"/>
      <div className="cards">
        <div className="c-card">
          <div className="c-content-wrapper">
            <img className="icon" src={championIcon} alt="Champion"/>
            <div className="c-content">
              <p className="p1" style={{color: '#FFFFFF'}}>Champions</p>
              <p className="p2" style={{color: '#FFFFFF'}}>
                GoGoods delivers an unparalleled customer service through dedicated customer teams, engaged people
              </p>
            </div>
            <div className="cards-content-read-more">
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="s-card">
          <div className="s-content-wrapper">
            <img className="icon" src={senderIcon} alt="Sender"/>
            <div className="s-content">
              <p className="p1" style={{color: '#000000'}}>Sender</p>
              <p className="p2" style={{color: '#000000'}}>
                GoGoods delivers an unparalleled customer service through dedicated customer teams, engaged people
              </p>
            </div>
            <div className="cards-content-read-more">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
