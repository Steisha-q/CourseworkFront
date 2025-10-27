import { Sidebar } from '../components/Layout/Sidebar';
import './UserLayout.css';

export const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        {children}
      </div>
    </div>
  );
};