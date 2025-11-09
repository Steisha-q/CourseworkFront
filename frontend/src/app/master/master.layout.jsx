import { Outlet } from "react-router";
import MasterSidebar from "./master.sidebar";
import "./master.layout.css";

export const MasterLayout = () => {
  return (
    <div className="master-layout">
      <div className="master-body">
        <MasterSidebar />
        <main className="master-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
