import { useState, useMemo } from "react";
import styles from "./styles.module.css";

export const MasterPostPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "New Woodworking Technique",
      community: "Woodworking Masters",
      content:
        "Just discovered an amazing new technique for finishing wooden surfaces. It creates a beautiful matte finish that really brings out the natural grain of the wood.",
      image: "/api/placeholder/400/200",
      tags: ["woodworking", "technique", "finishing"],
      status: "regular",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      title: "Looking for Ceramic Glazing Expert",
      community: "Ceramic Artists",
      content:
        "I need help with a complex glazing project. Looking for someone experienced with crystalline glazes for a special art piece.",
      image: null,
      tags: ["help", "glazing", "expert"],
      status: "need_master",
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      title: "Metal Welding Workshop",
      community: "Metal Crafts",
      content:
        "Organizing a welding workshop next weekend. All skill levels welcome! We will cover basic techniques and safety.",
      image: "/api/placeholder/400/200",
      tags: ["workshop", "welding", "metal"],
      status: "regular",
      createdAt: "2024-01-13",
    },
    {
      id: 4,
      title: "Need Help with Leather Tooling",
      community: "Leather Workers",
      content:
        "Struggling with complex leather tooling patterns. Anyone experienced willing to help me learn advanced techniques?",
      image: null,
      tags: ["help", "leather", "tooling", "beginner"],
      status: "need_master",
      createdAt: "2024-01-12",
    },
  ]);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => post.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [posts, searchTerm, selectedTags]);


  const handleDeletePost = (postId) => {
    setPosts((prev) => prev.filter((post) => post.id !== postId));
    setShowDeleteModal(false);
    setPostToDelete(null);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setPostForm({
      title: post.title,
      community: post.community,
      content: post.content,
      image: post.image,
      tags: [...post.tags],
      status: post.status,
    });
  };

  const openDeleteModal = (post) => {
    setPostToDelete(post);
    setShowDeleteModal(true);
  };

  const cancelEdit = () => {
    setEditingPost(null);
    resetForm();
  };

  const resetForm = () => {
    setPostForm({
      title: "",
      community: "",
      content: "",
      image: null,
      tags: [],
      status: "regular",
    });
    setNewTag("");
  };

  const handleTagFilter = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedTags([]);
  };

  return (
    <div className={styles.postPage}>
      <h1 className={styles.pageTitle}>Posts</h1>

      <div className={styles.postContainer}>

        <div className={styles.postsSection}>
          <div className={styles.searchFilters}>
            <div className={styles.searchGroup}>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.clearSearch} onClick={clearSearch}>
                Clear
              </button>
            </div>

            <div className={styles.tagsFilter}>
              <p className={styles.filterTitle}>Filter by tags:</p>
              <div className={styles.tagsList}>
                {allTags.map((tag) => (
                  <span
                    key={tag}
                    className={`${styles.tagFilter} ${
                      selectedTags.includes(tag) ? styles.tagFilterActive : ""
                    }`}
                    onClick={() => handleTagFilter(tag)}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.resultsInfo}>
            <div className={styles.resultsCount}>
              {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""}{" "}
              found
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className={styles.noResults}>
              <p>No posts found</p>
            </div>
          ) : (
            <div className={styles.postsList}>
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`${styles.postCard} ${
                    post.status === "need_master"
                      ? styles.postCardNeedMaster
                      : styles.postCardRegular
                  }`}
                >
                  <div className={styles.postHeader}>
                    <h4 className={styles.postTitle}>{post.title}</h4>
                    <span className={styles.postCommunity}>
                      {post.community}
                    </span>
                  </div>

                  <p className={styles.postContent}>{post.content}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className={styles.postImage}
                    />
                  )}

                  {post.tags.length > 0 && (
                    <div className={styles.postTags}>
                      {post.tags.map((tag) => (
                        <span key={tag} className={styles.postTag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className={styles.postFooter}>
                    <span
                      className={`${styles.postStatus} ${
                        post.status === "need_master"
                          ? styles.statusNeedMaster
                          : styles.statusRegular
                      }`}
                    >
                      {post.status === "need_master"
                        ? "Need Master"
                        : "Regular Post"}
                    </span>
                    <div className={styles.postActions}>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEditPost(post)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => openDeleteModal(post)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {showDeleteModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Delete Post</h3>
            <p>
              Are you sure you want to delete "{postToDelete?.title}"? This
              action cannot be undone.
            </p>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className={styles.confirmBtn}
                onClick={() => handleDeletePost(postToDelete.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPostPage;
