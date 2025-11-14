import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const EditProfileModal = ({ isOpen, onClose, masterInfo, onSave }) => {
  const [formData, setFormData] = useState({
    username: "",
    bio: "",
    avatar_url: "",
  });

  useEffect(() => {
    if (isOpen) {
      setFormData(masterInfo);
    }
  }, [isOpen, masterInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          avatar_url: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Edit Profile</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.avatarSection}>
            <div className={styles.avatarPreview}>
              {formData.avatar_url ? (
                <img
                  src={formData.avatar_url}
                  alt="Avatar preview"
                  className={styles.avatarPreviewImage}
                />
              ) : (
                <div className={styles.avatarPlaceholder}>👤</div>
              )}
            </div>
            <label className={styles.uploadLabel}>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className={styles.uploadInput}
              />
              Change Avatar
            </label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.formLabel}>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter your username"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bio" className={styles.formLabel}>
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className={styles.formTextarea}
              placeholder="Tell about yourself..."
              rows="4"
            />
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={`${styles.modalButton} ${styles.cancelButton}`}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.modalButton} ${styles.saveButton}`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
