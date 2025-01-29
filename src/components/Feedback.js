import React from 'react';
import "../styles/Feedback.css";
import championIcon from "../images/championIcon.svg";
import senderIcon from "../images/senderIcon.svg";
import leftLine from "../images/leftLine.svg";
import rightLine from "../images/rightLine.svg";
import arrow from "../images/arrow.svg";
import championPhoto from "../images/championPhoto.svg";
import senderPhoto from "../images/senderPhoto.svg";

const Feedback = () => {
  return (
    <div className="feedback">
      <img className="f-line" src={leftLine} alt="Line" style={{left: "7.72rem"}}/>
      <img className="f-icon" src={championIcon} alt="Champion" style={{left: "5.32rem"}}/>
      <img className="f-line" src={rightLine} alt="Line" style={{right: "7.67rem"}}/>
      <img className="f-icon" src={senderIcon} alt="Sender" style={{right: "5.27rem"}}/>
      <p className="f-heading">Real Stories, Real Trust – Hear from Our Happy Champions & Senders!</p>
      <div className="review-wrapper">
        <div className="c-review-box">
          <img className="arrow" src={arrow} alt="Back"/>
          <div className="review-box-content">
            <img className="f-photo" src={championPhoto} alt="Champion Photo"/>
            <p className="f-content-1">Champion - Ramesh Natarajan</p>
            <p className="f-content-2">
              Lorem ipsum dolor sit amet consectetur. Sit laoreet arcu in mi netus lacus vel. Morbi mattis mauris amet vitae facilisis. Ornare porta pellentesque cursus donec imperdiet venenatis sit commodo. Ultrices augue sed mauris sed.
            </p>
          </div>
        </div>
        <div className="review-sep"></div>
        <div className="s-review-box">
          <div className="review-box-content">
            <img className="f-photo" src={senderPhoto} alt="Sender Photo"/>
            <p className="f-content-1">Sender - Sunita Tiwari</p>
            <p className="f-content-2">
              Lorem ipsum dolor sit amet consectetur. Sit laoreet arcu in mi netus lacus vel. Morbi mattis mauris amet vitae facilisis. Ornare porta pellentesque cursus donec imperdiet venenatis sit commodo. Ultrices augue sed mauris sed.
            </p>
          </div>
          <img className="arrow" src={arrow} alt="Next"
               style={{transformOrigin: "center", transform: "rotate(180deg)"}}/>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
