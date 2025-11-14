import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { useAuth } from "../../../hooks";

export const ProfileHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const stats = {
    products: 100,
    followers: "1.2k",
    signed: 51,
  };
  const handleEditProfile = () => {
    console.log("Edit profile clicked");
    // navigate("/user/editprofile");
  };
  return (
    <div className={styles.profileHeader}>
      <div className={styles.profileMain}>
        {user.avatar_url ? (
          <img
            src={user.avatar_url || "/default-avatar.png"}
            alt="Avatar Preview"
            className="avatar-placeholder"
          />
        ) : (
          <div className={styles.profileAvatar}>
            <div className={styles.avatarPlaceholder}>👤</div>
          </div>
        )}

        <div className={styles.profileContent}>
          <div className={styles.profileTop}>
            <h1 className={styles.profileName}>{user.username}</h1>
            <button
              className={styles.editProfileBtn}
              onClick={handleEditProfile}
            >
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
            <p>{user.bio || "No bio"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
