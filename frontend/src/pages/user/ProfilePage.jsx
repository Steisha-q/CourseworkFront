import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useAuth } from "../../hooks";
import { ProfileHeader } from "../../modules/users/components";

export const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  console.log("user data:", user);

  const handleEditProfile = () => {
    navigate("/user/editprofile");
  };

  return (
    <div className="profile-page">
      <ProfileHeader />

      <div className="profile-navigation">
        <Link
          to="/profile"
          className={`nav-btn ${
            location.pathname === "/profile" ? "active" : ""
          }`}
        >
          Posts
        </Link>
        <Link
          to="/gains"
          className={`nav-btn ${
            location.pathname === "/gains" ? "active" : ""
          }`}
        >
          Gains
        </Link>
        <Link
          to="/shopping"
          className={`nav-btn ${
            location.pathname === "/shopping" ? "active" : ""
          }`}
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
