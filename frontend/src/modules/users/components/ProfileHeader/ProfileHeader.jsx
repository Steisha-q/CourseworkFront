import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useAuth } from "../../../../hooks";

export const ProfileHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleEditProfile = () => {
    navigate("/user/editprofile");
  };
  
  return (
    <div className="profile-header">
      <div className="profile-main">
        <div className="profile-avatar">
          {user.avatar_url ? (
            <img
              src={user.avatar_url || "/default-avatar.png"}
              alt="Avatar Preview"
              className="avatar-placeholder"
            />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
        </div>
        <div className="profile-content">
          <div className="profile-top">
            <div className="profile-name-section">
              <h2 className="nickname">{user.username}</h2>
              <button className="edit-profile-btn" onClick={handleEditProfile}>
                Edit profile
              </button>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-number">1m</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-number">51</span>
                <span className="stat-label">Signed</span>
              </div>
            </div>
          </div>

          <div className="profile-bio">
            <p>{user.bio || "No bio"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
