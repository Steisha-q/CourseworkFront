// LoaderOverlay.jsx
import React from "react";
import styles from "./styles.module.css";

export const LoaderOverlay = ({ show }) => {
  if (!show) return null; // hide if not needed

  return (
    <div className={styles.overlay}>
      <div className={styles.loader}></div>
    </div>
  );
};
