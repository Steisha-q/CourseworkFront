import React from "react";
import "./auth.header.css";
import logoImage from "../../assets/Logo.jpg";

export const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div className="auth-logo-container">
        <img
              src={logoImage}
              alt="EcoCraft illustration"
              className="auth-logo-placeholder"
            />
        <h1 className="auth-logo">EcoCraft</h1>
      </div>
    </header>
  );
};
