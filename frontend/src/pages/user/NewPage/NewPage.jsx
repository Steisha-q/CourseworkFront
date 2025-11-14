import { useState, useMemo } from "react";
import styles from "./styles.module.css";

export const NewPage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [searchQuery, setSearchQuery] = useState("");

  const [userPosts, setUserPosts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      title: "New Woodworking Technique Discovered",
      content:
        "Just discovered an amazing new technique for finishing wooden surfaces.",
      date: "2 days ago",
      likes: 45,
      isLiked: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop",
      title: "Leather Wallet Collection",
      content:
        "Finished my latest leather wallet collection. Each piece is hand-tooled.",
      date: "1 week ago",
      likes: 89,
      isLiked: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1491147334573-44cbb4602074?w=600&h=400&fit=crop",
      title: "Woodturning Workshop",
      content: "Amazing workshop experience learning woodturning techniques.",
      date: "2 weeks ago",
      likes: 156,
      isLiked: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      title: "Ceramic Glazing Results",
      content:
        "Perfect crystalline glazes achieved after months of experimentation.",
      date: "3 weeks ago",
      likes: 203,
      isLiked: false,
    },
  ]);

  const filteredPosts = useMemo(() => {
    return userPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [userPosts, searchQuery]);

  const handleLikePost = (postId) => {
    setUserPosts((posts) =>
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>🔍</span>
        </div>
      </div>

      <div className={styles.contentSection}>
        {filteredPosts.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No posts found</p>
            <p>Try adjusting your search terms</p>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {filteredPosts.map((post) => (
              <div key={post.id} className={styles.postCard}>
                <div className={styles.postImageContainer}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.postImage}
                  />
                </div>

                <div className={styles.postInfo}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postContent}>{post.content}</p>

                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>{post.date}</span>
                    <button
                      className={`${styles.likeButton} ${
                        post.isLiked ? styles.liked : ""
                      }`}
                      onClick={() => handleLikePost(post.id)}
                    >
                      {post.isLiked ? "❤️" : "🤍"} {post.likes}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewPage;
