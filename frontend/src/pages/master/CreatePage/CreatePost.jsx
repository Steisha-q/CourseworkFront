import React, { useState } from 'react'
import styles from "../MasterPostPage/styles.module.css";

export const CreatePost = () => {
  const [editingPost, setEditingPost] = useState(null);
  const [newTag, setNewTag] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const [postForm, setPostForm] = useState({
    title: "",
    community: "",
    content: "",
    image: null,
    tags: [],
    status: "regular",
  });

  const communities = [
    { id: 1, name: "Woodworking Masters" },
    { id: 2, name: "Ceramic Artists" },
    { id: 3, name: "Metal Crafts" },
    { id: 4, name: "Leather Workers" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostForm((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setPostForm((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !postForm.tags.includes(newTag.trim())) {
      setPostForm((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }));
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setPostForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleTagKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      ...postForm,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setPosts((prev) => [newPost, ...prev]);
    resetForm();
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    setPosts((prev) =>
      prev.map((post) =>
        post.id === editingPost.id ? { ...post, ...postForm } : post
      )
    );
    setEditingPost(null);
    resetForm();
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


  return (
    <div className={styles.postPage}>
      <div className={styles.postContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>
            {editingPost ? "Edit Post" : "Create New Post"}
          </h2>

          <form
            className={styles.form}
            onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
          >
            <div className={styles.formGroup}>
              <label className={`${styles.label} ${styles.labelRequired}`}>
                Post Title
              </label>
              <input
                type="text"
                name="title"
                value={postForm.title}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter post title"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={`${styles.label} ${styles.labelRequired}`}>
                Community
              </label>
              <select
                name="community"
                value={postForm.community}
                onChange={handleInputChange}
                className={styles.select}
                required
              >
                <option value="">Select community</option>
                {communities.map((community) => (
                  <option key={community.id} value={community.name}>
                    {community.name}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label className={`${styles.label} ${styles.labelRequired}`}>
                Content
              </label>
              <textarea
                name="content"
                value={postForm.content}
                onChange={handleInputChange}
                className={styles.textarea}
                placeholder="Write your post content..."
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Image</label>
              {!postForm.image ? (
                <div className={styles.imageUpload}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                  <label className={styles.uploadLabel}>
                    <span className={styles.uploadIcon}>📷</span>
                    Click to upload image
                  </label>
                </div>
              ) : (
                <div className={styles.imagePreview}>
                  <img
                    src={postForm.image}
                    alt="Preview"
                    className={styles.previewImage}
                  />
                  <button
                    type="button"
                    className={styles.removeImage}
                    onClick={handleRemoveImage}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Tags</label>
              <div className={styles.tagsContainer}>
                {postForm.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                    <button
                      type="button"
                      className={styles.removeTag}
                      onClick={() => handleRemoveTag(tag)}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className={styles.tagInput}>
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={handleTagKeyPress}
                  className={styles.input}
                  placeholder="Add tag..."
                />
                <button
                  type="button"
                  className={styles.addTagBtn}
                  onClick={handleAddTag}
                  disabled={!newTag.trim()}
                >
                  Add Tag
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={`${styles.label} ${styles.labelRequired}`}>
                Post Type
              </label>
              <div className={styles.statusOptions}>
                <div className={styles.statusOption}>
                  <input
                    type="radio"
                    name="status"
                    value="regular"
                    checked={postForm.status === "regular"}
                    onChange={handleInputChange}
                    className={styles.statusRadio}
                    id="regular"
                  />
                  <label htmlFor="regular" className={styles.statusLabel}>
                    Regular Post
                  </label>
                </div>
                <div className={styles.statusOption}>
                  <input
                    type="radio"
                    name="status"
                    value="need_master"
                    checked={postForm.status === "need_master"}
                    onChange={handleInputChange}
                    className={styles.statusRadio}
                    id="need_master"
                  />
                  <label htmlFor="need_master" className={styles.statusLabel}>
                    Need Master
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.submitBtn}>
                {editingPost ? "Update Post" : "Create Post"}
              </button>
              {editingPost && (
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={cancelEdit}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};