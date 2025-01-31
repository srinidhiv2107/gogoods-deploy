import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-content">
        <p className="gogoods-heading">Go<span>Goods</span></p>
        <div className="nav-content-right">
          <div className={`links ${menuOpen ? 'open' : ''}`}>
            {[{name: "Home", link: "home"},
              {name: "Champions", link: "championOrSender"},
              {name: "Sender", link: "championOrSender"},
              {name: "About Us", link: "about us"}].map(element => (
              <div
                key={element.name}
                className={`link ${element.name === activeLink ? 'active' : ''}`}
              >
                <a href={`#${element.link}`} onClick={() => setActiveLink(element.name)}>{element.name}</a>
              </div>
            ))}
          </div>
          <button className="request-call">Request Call</button>
          <div className="menu" onClick={() => setIsMenuOpen(!menuOpen)}>
            <i className="material-icons">menu</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
