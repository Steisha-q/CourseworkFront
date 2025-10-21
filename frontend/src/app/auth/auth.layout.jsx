import React from "react";
import "./auth.layout.css";
import { AuthSidebar } from "./auth.sidebar";
import { Outlet } from "react-router";

export const AuthLayout = ({ children }) => {
  return (
     <div className="auth-layout">
      <AuthSidebar />
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};