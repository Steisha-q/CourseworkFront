import './Sidebar.css';

export const Sidebar = () => {
  console.log('HERE');
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>Eccoraft</h1>
      </div>
      <nav className="sidebar-nav">
        <a href="#" className="nav-item">Home</a>
        <a href="#" className="nav-item">Search</a>
        <a href="#" className="nav-item">Message</a>
        <a href="#" className="nav-item">Create</a>
        <a href="#" className="nav-item active">Profile</a>
        <a href="#" className="nav-item">Feedback</a>
        <a href="#" className="nav-item">Tastes</a>
        <a href="#" className="nav-item">Posts</a>
      </nav>
      <button className="sidebar-logout-btn">Logout</button>
    </div>
  );
};