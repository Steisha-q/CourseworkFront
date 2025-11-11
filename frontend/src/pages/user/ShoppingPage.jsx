import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import './ShoppingPage.css';

export const ShoppingPage = () => {
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
 
      <div className="orders-section">
        <h3 className="orders-title">My Orders</h3>
        <div className="orders-list">
          <div className="order-card">
            <div className="order-image">
              <div className="image-placeholder">📷</div>
            </div>
            <div className="order-content">
              <h4 className="order-name">Cosy Shirt</h4>
              <div className="order-details">
                <p><strong>Size:</strong> 43</p>
                <p><strong>Cost:</strong> 150 ReCoin</p>
                <p><strong>Delivery type:</strong> Nova Poshta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};