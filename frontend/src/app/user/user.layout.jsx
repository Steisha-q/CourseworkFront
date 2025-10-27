import { Outlet } from 'react-router';
import { Sidebar } from './Sidebar';
import './UserLayout.css';

export const UserLayout = () => {
  console.log('HERE');
  return (
    <div className="user-layout">
      <Sidebar />
      <div className="main-content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};