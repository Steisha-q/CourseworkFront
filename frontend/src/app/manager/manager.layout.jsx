import React from "react";
import ManagerSidebar from "./manager.sidebar";
import ManagerHeader from "./manager.header";
import "./manager.layout.css";
import { Outlet } from "react-router";

export const ManagerLayout = () => {
  return (
    <div className="manager-layout">
      <ManagerHeader />
      <div className="manager-body">
        <ManagerSidebar />
        <main className="manager-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
