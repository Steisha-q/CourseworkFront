import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoaderOverlay } from "@modules/core";
import "./EditProfilePage.css";
import { useAuth, useRequest } from "../../hooks";
import { api } from "../../app/api";

export const EditProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();

  const { makeRequest, isLoading } = useRequest({
    api: api.updateUser,
  });

  const [formData, setFormData] = useState({
    username: user.username || "",
    bio: user.bio || "",
    avatar: "",
    preferences: JSON.parse(user.preferences || "{}") || {
      ecoNews: true,
      fashion: false,
      diy: true,
      upcycling: true,
      communityEvents: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (preference) => {
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...user,
      username: formData.username,
      bio: formData.bio,
      preferences: JSON.stringify(formData.preferences),
      avatar_url: formData.avatar,
    };

    const data = await makeRequest(updatedData);
    if (!data) return;

    updateUser(data);
    navigate(-1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleUploadShow = (e) => {
    document.getElementById("imageUpload").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-header">
        <h2>Edit Profile</h2>
        <p>Update your personal information and preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="edit-profile-form">
        <div className="form-section">
          <label className="section-label">Avatar</label>
          <div className="avatar-upload">
            <div className="avatar-preview">
              {formData.avatar ? (
                <img src={formData.avatar || '/default-avatar.png'} alt="Avatar Preview" className="avatar-placeholder" />
              ) : (<div className="avatar-placeholder">👤</div>)}
            </div>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <button
              type="button"
              className="upload-btn"
              onClick={handleUploadShow}
            >
              Change Avatar
            </button>
          </div>
        </div>

        <div className="form-section">
          <label htmlFor="username" className="section-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter your username"
          />
        </div>

        <div className="form-section">
          <label htmlFor="bio" className="section-label">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Tell about yourself..."
            rows="4"
          />
        </div>

        {/* Вподобання мають додаватись з того шо Настя створить */}
        <div className="form-section">
          <label className="section-label">Preferences</label>
          <div className="preferences-grid">
            <label className="preference-item">
              <input
                type="checkbox"
                checked={formData.preferences.ecoNews}
                onChange={() => handlePreferenceChange("ecoNews")}
              />
              <span>Eco News</span>
            </label>

            <label className="preference-item">
              <input
                type="checkbox"
                checked={formData.preferences.fashion}
                onChange={() => handlePreferenceChange("fashion")}
              />
              <span>Sustainable Fashion</span>
            </label>

            <label className="preference-item">
              <input
                type="checkbox"
                checked={formData.preferences.diy}
                onChange={() => handlePreferenceChange("diy")}
              />
              <span>DIY Projects</span>
            </label>

            <label className="preference-item">
              <input
                type="checkbox"
                checked={formData.preferences.upcycling}
                onChange={() => handlePreferenceChange("upcycling")}
              />
              <span>Upcycling Ideas</span>
            </label>

            <label className="preference-item">
              <input
                type="checkbox"
                checked={formData.preferences.communityEvents}
                onChange={() => handlePreferenceChange("communityEvents")}
              />
              <span>Community Events</span>
            </label>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </div>
      </form>

      <LoaderOverlay isLoading={isLoading} />
    </div>
  );
};
