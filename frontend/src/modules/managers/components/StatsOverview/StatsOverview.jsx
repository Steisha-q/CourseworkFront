import React from "react";
import "./StatsOverview.css";

const StatsOverview = () => {
  const stats = [
    {
      value: "16,278",
      label: "Completed Orders",
      trend: { value: "13,122", type: "up" },
      icon: "fas fa-check-circle",
      color: "#4caf50",
    },
    {
      value: "1,214",
      label: "New Orders",
      trend: { value: "25%", type: "neutral" },
      icon: "fas fa-shopping-cart",
      color: "#ff9800",
    },
    {
      value: "$169,248",
      label: "Total Revenue",
      actions: true,
      icon: "fas fa-dollar-sign",
      color: "#2196f3",
    },
  ];

  return (
    <div className="stats-overview">
      <h2>Statistics Overview</h2>
      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              {stat.trend && (
                <div className={`stat-trend ${stat.trend.type}`}>
                  {stat.trend.type === "up" && (
                    <i className="fas fa-arrow-up"></i>
                  )}
                  {stat.trend.type === "down" && (
                    <i className="fas fa-arrow-down"></i>
                  )}
                  <span>{stat.trend.value}</span>
                </div>
              )}
              {stat.actions && (
                <div className="stat-actions">
                  <button className="btn-primary">Buy</button>
                  <button className="btn-secondary">Work</button>
                  <button className="btn-outline">Month</button>
                </div>
              )}
            </div>
            <div
              className="stat-icon"
              style={{
                backgroundColor: `${stat.color}20`,
                color: stat.color,
              }}
            >
              <i className={stat.icon}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;
