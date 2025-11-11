import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import './GainPage.css';

export const GainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/user/editprofile');
  };

  return (
    <div className="profile-page">
      {/* Хедер */}
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

      {/* Навігація */}
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

      {/* Контент GainPage */}
      <div className="gains-section">
        <h3 className="gains-title">My Gains</h3>
        <div className="gains-list">
          <div className="gain-card">
            <div className="gain-badge">🏆</div>
            <div className="gain-content">
              <h4 className="gain-name">Cosy Shirt</h4>
              <p className="gain-description">Won in #giveaway_2024</p>
              <span className="gain-date">December 15, 2024</span>
            </div>
          </div>
          
          <div className="gain-card">
            <div className="gain-badge">🎁</div>
            <div className="gain-content">
              <h4 className="gain-name">Eco Tote Bag</h4>
              <p className="gain-description">Won in weekly raffle</p>
              <span className="gain-date">December 10, 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};