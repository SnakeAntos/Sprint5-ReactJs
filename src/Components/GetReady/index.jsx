import React, { useState } from 'react';
import GetStarted from "./GetStarted";
import "./index.css";

const GetReady = (props) =>{
  const [email, setEmail] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  return(
    <>
      <div className="getReady-container">
        <div className="getReady-container-inner">
          <p className="getReady-title">{props.title}</p>
          <div className="getReady-paragraph-container">
            <p className="getReady-paragraph">{props.paragraph}</p>
          </div>
          <GetStarted
            buttonText="Get Started For Free"
            onEmailChange={handleEmailChange} // Pasa la función de devolución de llamada como una prop
          />
        </div>
      </div>
    </>
  )
};

export default GetReady;
