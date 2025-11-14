import React, { useState } from "react";
import styles from "./styles.module.css";

export const CreateCommunity = () => {
  const [communityForm, setCommunityForm] = useState({
    name: "",
    description: "",
  });

  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Woodworking Masters",
      description:
        "Community for professional woodworkers to share techniques and projects",
    },
    {
      id: 2,
      name: "Ceramic Artists",
      description:
        "Space for ceramic artists to showcase their work and collaborate",
    },
  ]);

  const handleCommunityChange = (e) => {
    const { name, value } = e.target;
    setCommunityForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    const newCommunity = {
      id: Date.now(),
      ...communityForm,
    };

    setCommunities((prev) => [...prev, newCommunity]);
    setCommunityForm({
      name: "",
      description: "",
    });
  };

  return (
    <>
      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>Create New Community</h2>

        <form className={styles.form} onSubmit={handleCreateCommunity}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Community Name</label>
            <input
              type="text"
              name="name"
              value={communityForm.name}
              onChange={handleCommunityChange}
              className={styles.input}
              placeholder="Enter community name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Description</label>
            <textarea
              name="description"
              value={communityForm.description}
              onChange={handleCommunityChange}
              className={styles.textarea}
              placeholder="Describe your community..."
              required
            />
          </div>

          <button type="submit" className={styles.submitBtn}>
            Create Community
          </button>
        </form>

        <div style={{ marginTop: "40px" }}>
          <h3 className={styles.formTitle}>My Communities</h3>
          {communities.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No communities created yet</p>
            </div>
          ) : (
            <div className={styles.communitiesList}>
              {communities.map((community) => (
                <div key={community.id} className={styles.communityCard}>
                  <h4 className={styles.communityName}>{community.name}</h4>
                  <p className={styles.communityDescription}>
                    {community.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
