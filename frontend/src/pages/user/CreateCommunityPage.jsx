import React, { useState } from "react";
import "./CreateCommunityPage.css";

export const CreateCommunityPage = () => {
  const [groupName, setGroupName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const recommendations = [
    { id: 1, name: "Aladin", username: "muhuane" },
    { id: 2, name: "Garardin", username: "muhuane" },
    { id: 3, name: "Matrika", username: "muhuane" },
    { id: 4, name: "May08", username: "muhuane" },
    { id: 5, name: "Name", username: "muhuane" },
    { id: 6, name: "Muhuane", username: "muhuane" },
    { id: 7, name: "Name", username: "muhuane" },
    { id: 8, name: "Muhuane", username: "muhuane" }
  ];

  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="create-community-page">
      <div className="create-community-container">
        <div className="create-community-header">
          <h1>Create community</h1>
        </div>
 
        <div className="form-section">
          <label className="section-label">Group name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="form-input"
            placeholder="Enter group name"
          />
        </div>
        <div className="form-section">
          <label className="section-label">Search</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            placeholder="Search users..."
          />
        </div>
 
        <div className="recommendations-section">
          <h3 className="recommendations-title">Recommendations</h3>
          <div className="users-grid">
            {recommendations.map((user) => (
              <div
                key={user.id}
                className={`user-card ${selectedUsers.includes(user.id) ? 'selected' : ''}`}
                onClick={() => toggleUserSelection(user.id)}
              >
                <div className="user-avatar">
                  <div className="avatar-placeholder">
                    {user.name.charAt(0)}
                  </div>
                </div>
                <div className="user-info">
                  <h4 className="user-name">{user.name}</h4>
                  <p className="user-username">@{user.username}</p>
                </div>
                <div className="selection-indicator">
                  {selectedUsers.includes(user.id) ? "✓" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="create-actions">
          <button className="create-community-btn">
            Create Community ({selectedUsers.length})
          </button>
        </div>
      </div>
    </div>
  );
};