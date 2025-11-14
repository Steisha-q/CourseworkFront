import React from "react";
import { ROUTES } from "../constants";
import { useLocation } from "react-router-dom";
import "./master.sidebar.css";

import {
  FaSearch,
  FaPlusCircle,
  FaUser,
  FaFire,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { icon: FaClipboardList, label: "Feed", route: ROUTES.masterpost() },
  { icon: FaPlusCircle, label: "Create", route: ROUTES.create() },
  { icon: FaUser, label: "Profile", route: ROUTES.mprofile() },
  { icon: FaSearch, label: "Search", route: ROUTES.search() },
  { icon: FaFire, label: "Community", route: ROUTES.community() },
];

const MasterSidebar = () => {
  const location = useLocation();

  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  return (
    <div className="master-sidebar">
      <div>
        <h1 className="sidebar-brand-name">Ecocraft</h1>

        <nav className="sidebar-nav">
          <ul className="nav-links">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = isActiveRoute(item.route);

              return (
                <li
                  key={index}
                  className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                >
                  <a href={item.route} className="sidebar-nav-link">
                    <IconComponent className="sidebar-icon" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="sidebar-logout-section">
        <a href="/signIn" className="sidebar-logout-link">
          <FaSignOutAlt className="sidebar-icon" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default MasterSidebar;
