import { Link, useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import './ShoppingPage.css';
import { ProfileHeader } from '../../modules/users/components';

export const ShoppingPage = () => {
  const location = useLocation();
  return (
    <div className="profile-page">
      <ProfileHeader />
 
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