import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

export const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/user/editprofile');  
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-main">
          <div className="profile-avatar">
            <div className="avatar-placeholder">👤</div>
          </div>
          
          <div className="profile-content">
            <div className="profile-top">
              <div className="profile-name-section">
                <h2 className="nickname">Nickname</h2>
                 <button 
                  className="edit-profile-btn" 
                  onClick={handleEditProfile}  
                >
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
              <p>About me</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-navigation">
        <Link 
          to="/profile"
          className={`nav-btn ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          Posts
        </Link>
        <Link 
          to="/gains"
          className={`nav-btn ${location.pathname === '/gains' ? 'active' : ''}`}
        >
          Gains
        </Link>
        <Link 
          to="/shopping"
          className={`nav-btn ${location.pathname === '/shopping' ? 'active' : ''}`}
        >
          Orders
        </Link>
      </div>

      <div className="posts-section">
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