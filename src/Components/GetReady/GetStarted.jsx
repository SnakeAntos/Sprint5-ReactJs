import React, { useState } from "react";
import "./index.css";

const GetStarted = (props) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsValid(event.target.validity.valid);
  };

  const handleButtonClick = () => {
    if (isValid) {
      console.log(`Email enviado a: ${email}`);
      alert("Sus datos han sido enviados");//si me da el tiempo haria un mensaje emergente con css y states.
      setEmail("");
      setShowError(false);
    } else {
      console.log(`Email no válido: ${email}`);
      setShowError(true);
    }
  };

  return (
    <form className="getStarted-form">
      <div className="getStarted-container">
        <input
          id="getStartedEmailInput"
          type="email"
          className="getStarted-input"
          placeholder="email@example.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <a
          id="getStartedEmailButton"
          className="getStarted-button-a"
          onClick={handleButtonClick}
        >
          {props.buttonText}
        </a>
      </div>
      {showError && (
        <div className="getStarted-error-container">
          <span className="getStarted-error-message">
            verifique los datos ingresados
          </span>
        </div>
      )}
    </form>
  );
};

export default GetStarted;
