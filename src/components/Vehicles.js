import React from 'react';
import "../styles/Vehicles.css";
import vehicles from "../images/vehicles.svg";
import vPointer from "../images/vPointer.svg";
import triangle from "../images/triangle.svg";
import shadow from "../images/shadow.svg";

const Vehicles = () => {
  return (
    <div className="vehicles">
      <div className="v-content">
        <p className="v-content-1">Vehicles Used For <span>Deliveries</span></p>
        <p className="v-content-2">Opt for Vehicles according to your needs</p>
      </div>

      <img src={vPointer} alt="Arrow" className="v-pointer"/>
      <img src={triangle} alt="Triangle" className="triangle"/>
      <img src={shadow} alt="Shadow" className="shadow"/>
      <img src={vehicles} alt="Vehicles" className="vehiclesBG"/>
    </div>
  );
};

export default Vehicles;
