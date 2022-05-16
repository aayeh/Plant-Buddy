import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Plant Buddy</h1>

    <p className="lead">
      This is an application that will help you grow plants easily and efficiently
    </p>
    
  </div>
);

export default Hero;
