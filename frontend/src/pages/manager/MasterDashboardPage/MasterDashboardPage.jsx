import React from "react";
import { StatsOverview } from "@modules/managers";
import styles from "./styles.module.css";

export const MasterDashboardPage = () => {
  return (
    <div className={styles["dashboard-page"]}>
      <StatsOverview />
      <div className={styles["dashboard-content"]}></div>
    </div>
  );
};
