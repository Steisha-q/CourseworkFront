import React from "react";
import ManagerSidebar from "./manager.sidebar";
import ManagerHeader from "./manager.header";
import "./manager.layout.css";
import { Outlet } from "react-router";

export const ManagerLayout = ({ children }) => {
  return (
    <div className="manager-layout">
      <ManagerSidebar />
      <div className="manager-main-content">
        <ManagerHeader />
        <main className="manager-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
