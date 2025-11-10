import React, { useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([
    {
      post_id: 1,
      title: "Перший пост",
      author_id: 101,
      community_id: 5,
      tag: "Новини",
      status: "Опубліковано",
      created_at: new Date().toISOString(),
      image_url: "https://via.placeholder.com/150x150?text=Post+1",
    },
    {
      post_id: 2,
      title: "Другий пост",
      author_id: 102,
      community_id: 3,
      tag: "Оголошення",
      status: "Чернетка",
      created_at: new Date().toISOString(),
      image_url: "https://via.placeholder.com/150x150?text=Post+2",
    },
    {
      post_id: 3,
      title: "Третій пост",
      author_id: 103,
      community_id: 1,
      tag: "Подія",
      status: "Опубліковано",
      created_at: new Date().toISOString(),
      image_url: "https://via.placeholder.com/150x150?text=Post+3",
    },
  ]);

  return (
    <div className={styles.postsPage}>
      <h1>Управління постами</h1>
      <div className={styles.postsList}>
        {posts.map((post) => (
          <div key={post.post_id} className={styles.postCard}>
            <img
              src={post.image_url}
              alt={post.title}
              className={styles.postImage}
            />
            <div className={styles.postContent}>
              <h2>{post.title}</h2>
              <p>
                <strong>Автор:</strong> {post.author_id}
              </p>
              <p>
                <strong>Спільнота:</strong> {post.community_id}
              </p>
              <p>
                <strong>Тег:</strong> {post.tag}
              </p>
              <p>
                <strong>Статус:</strong>{" "}
                <span
                  className={
                    post.status === "Опубліковано"
                      ? styles.published
                      : styles.draft
                  }
                >
                  {post.status}
                </span>
              </p>
              <p>
                <strong>Створено:</strong>{" "}
                {new Date(post.created_at).toLocaleString()}
              </p>
              <Link
                to={`/manager/posts/${post.post_id}`}
                className={styles.detailsBtn}
              >
                Деталі
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
