import React from "react";
import styles from "./styles.module.css";

export const ProfileHeader = ({ masterInfo, onEditProfile }) => {
  const stats = {
    products: 100,
    followers: "1.2k",
    signed: 51,
  };

  return (
    <div className={styles.profileHeader}>
      <div className={styles.profileMain}>
        {masterInfo.avatar_url ? (
          <img
            src={masterInfo.avatar_url}
            alt="Avatar"
            className={styles.avatarImage}
          />
        ) : (
          <div className={styles.profileAvatar}>
            <div className={styles.avatarPlaceholder}>👤</div>
          </div>
        )}

        <div className={styles.profileContent}>
          <div className={styles.profileTop}>
            <h1 className={styles.profileName}>{masterInfo.username}</h1>
            <button className={styles.editProfileBtn} onClick={onEditProfile}>
              Edit profile
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{stats.products}</span>
              <span className={styles.statLabel}>Posts</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{stats.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{stats.signed}</span>
              <span className={styles.statLabel}>Signed</span>
            </div>
          </div>

          <div className={styles.profileBio}>
            <p>{masterInfo.bio || "No bio"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
