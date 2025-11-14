import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useAuth, useRequest } from "../../hooks";
import { ProfileHeader } from "../../modules/users/components";
import { api } from "../../app/api";

export const ProfilePage = () => {
  const location = useLocation();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { makeRequest } = useRequest({
    api: api.getPostsByUser,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = async () => {
    const data = await makeRequest(user.user_id);
    if (!data) return;
    setPosts(data || []);
  };

  const renderPost = (post) => {
    console.log('HERE', post);
    
    return (
      <div key={post.post_id} className="post-item">
        {post.image_url ? (
          <img
            src={post.image_url}
            alt="Post"
            className="post-image"
          />
        ) : null}
        <span className="post-caption">{post.title}</span>
      </div> 
    );
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
        <div className="posts-grid">{posts.map(renderPost)}</div>
      </div>
    </div>
  );
};
