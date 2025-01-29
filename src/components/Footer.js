import React from 'react';
import "../styles/Footer.css";
import facebookIcon from "../images/facebookIcon.svg";
import instagramIcon from "../images/instagramIcon.svg";
import linkedinIcon from "../images/linkedinIcon.svg";
import twitterIcon from "../images/twitterIcon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-heading">Let's Move in the Future Together</p>
      <button className="get-in-touch-btn">Get In Touch</button>
      <div className="links-details-connect-wrapper">
        <div className="links-details-wrapper">
          <div className="footer-links">
            {[{name: "Home", link: "home"},
              {name: "Champions", link: "championOrSender"},
              {name: "Sender", link: "championOrSender"},
              {name: "About Us", link: "about us"}].map(element => (
                <a href={`#${element.link}`}
                   className="footer-link"
                >{element.name}</a>
            ))}
          </div>
          <div className="details">
            <p>Contact Us</p>
            <p>+(619) 762-9361</p>
            <p>xyz@gogood.logistics</p>
            <p>4225 Executive Square Suite 600<br/> La Jolla, Bengaluru 92037</p>
          </div>
        </div>
        <div className="connect-wrapper">
          <img className="f-connect" src={facebookIcon} alt="Facebook"/>
          <img className="f-connect" src={instagramIcon} alt="Instagram"/>
          <img className="f-connect" src={linkedinIcon} alt="LinkedIn"/>
          <img className="f-connect" src={twitterIcon} alt="Twitter"/>
        </div>
      </div>
      <div className="copyright-wrapper">
        <p className="cr-text">Copyright 2024 © GoGoods | All Rights Reserved.</p>
        <p className="cr-text">Champion - Privacy Policy | Terms and Conditions</p>
        <p className="cr-text">Sender - Privacy Policy | Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
