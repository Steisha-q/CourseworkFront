import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { ROUTES } from '../constants';

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
};

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Ecocraft</h1>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className={isActive('/')}>
          Home
        </Link>
        <a href="#" className="nav-item">Search</a>
        {/* <a href="#" className="nav-item">Message</a> */}
        <Link to={ROUTES.post()} className={isActive(ROUTES.post())}>
          Create
        </Link>
        <Link to="/profile" className={isActive('/profile')}>
          Profile
        </Link>
        <Link to="/feedback" className={isActive('/feedback')}>
          Feedback
        </Link>
        <Link to="/user/preferences" className={isActive('/user/preferences')}>
          Tastes
        </Link>
        <Link to={ROUTES.posts()} className={isActive(ROUTES.posts())}>
          Posts
        </Link>
      </nav>
      <button className="sidebar-logout-btn">Logout</button>
    </div>
  );
};