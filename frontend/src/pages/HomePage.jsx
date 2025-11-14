import React, { useState, useRef } from "react";
import { Header } from "@modules/users/components";
import "./FeedPage.css";

export const HomePage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: {
        name: "EcoCraft Community",
        avatar: "🌱",
        role: "Official Account"
      },
      date: "09.08.2025",
      content: "Just finished upcycling this beautiful vintage sweater! What do you think about the new design?",
      // image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=500&h=500&fit=crop",
      likes: 163,
      comments: 24,
      shares: 12,
      tags: ["upcycling", "vintage", "sustainablefashion"]
    }
  ]);

  const [newPost, setNewPost] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPost = () => {
    if (newPost.trim() === "" && !selectedImage) return;

    const post = {
      id: Date.now(),
      user: {
        name: "Current User",
        avatar: "👤",
        role: "Community Member"
      },
      date: new Date().toLocaleDateString("uk-UA"),
      content: newPost,
      image: selectedImage,
      likes: 0,
      comments: 0,
      shares: 0,
      tags: ["newpost"]
    };
 
    setPosts([...posts, post]);
    setNewPost("");
    setSelectedImage(null);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="feed-page">
      <Header />
      
      <div className="page-layout">
        <main className="main-content">
          <div className="create-post-wrapper">
            <div className="create-post-card">
              <div className="post-input-container">
                <div className="user-avatar">👤</div>
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your upcycling ideas, projects, or questions..."
                  className="post-textarea"
                />
              </div>

              <div className="image-upload-section">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="file-input"
                />
                <label htmlFor="file-input" className="add-photo-btn">
                  📷 Add Photo
                </label>
                
                {selectedImage && (
                  <div className="selected-image-preview">
                    <img src={selectedImage} alt="Selected preview" className="image-preview" />
                    <button onClick={removeImage} className="remove-image-btn">×</button>
                  </div>
                )}
              </div>

              <div className="post-actions">
                <button 
                  onClick={handleAddPost} 
                  className="publish-btn"
                  disabled={!newPost.trim() && !selectedImage}
                >
                  Publish Post
                </button>
              </div>
            </div>
          </div>
 
          <div className="posts-feed-wrapper">
            <div className="posts-grid">
              {posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="user-info">
                      <span className="user-avatar">{post.user.avatar}</span>
                      <div className="user-details">
                        <h4 className="user-name">{post.user.name}</h4>
                        <span className="user-role">{post.user.role}</span>
                      </div>
                    </div>
                    <span className="post-date">{post.date}</span>
                  </div>
                  
                  <div className="post-content">
                    <p>{post.content}</p>
 
                    {post.image && (
                      <div className="post-image-container">
                        <img 
                          src={post.image} 
                          alt={`Upcycling project by ${post.user.name}`} 
                          className="post-image" 
                        />
                      </div>
                    )}
                  </div>

                  <div className="post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>

                  <div className="post-stats">
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="stat-btn"
                    >
                      👍 {post.likes}
                    </button>
                    <button className="stat-btn">
                      💬 {post.comments}
                    </button>
                    <button className="stat-btn">
                      🔄 {post.shares}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};