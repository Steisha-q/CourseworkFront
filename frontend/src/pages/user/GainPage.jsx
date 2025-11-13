import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import './GainPage.css';
import { ProfileHeader } from '../../modules/users/components';

export const GainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/user/editprofile');
  };

  return (
    <div className="profile-page">
      <ProfileHeader />

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