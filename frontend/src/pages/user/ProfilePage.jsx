import './ProfilePage.css';

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-main">
          <div className="profile-info">
            <div className="profile-top">
              <h2 className="nickname">Nickname</h2>
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
              <p>About me</p>
            </div>
          </div>
          
          <div className="profile-actions">
            <button className="edit-profile-btn">Edit profile</button>
          </div>
        </div>
      </div>

      <div className="posts-section">
        <h3 className="posts-title">Posts</h3>
        <div className="posts-grid">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div key={post} className="post-item">
              Post {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};