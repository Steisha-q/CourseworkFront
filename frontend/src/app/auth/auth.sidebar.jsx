import React from "react";
import "./auth.sidebar.css";
import authImage from "../../assets/Auth.png";

export const AuthSidebar = () => {
  return (
    <aside className="auth-sidebar">
      <img
      src={authImage}
      alt="EcoCraft illustration"
      className="auth-sidebar-img"
    />
    </aside>
  );
};