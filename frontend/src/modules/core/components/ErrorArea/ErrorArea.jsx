// ErrorArea.jsx
import React from "react";
import styles from "./styles.module.css";

export const ErrorArea = ({ message, onRetry, fullScreen = false }) => {
    if (!message?.length) return null; // no error to show
  return (
    <div className={`${styles['error-area']} ${fullScreen ? styles.fullscreen : ""}`}>
      <div className={styles['error-box']}>
        <h4>⚠️ Something went wrong</h4>
        <p>{message || "An unexpected error occurred. Please try again."}</p>
        {onRetry && (
          <button onClick={onRetry} className={styles['retry-btn']}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};