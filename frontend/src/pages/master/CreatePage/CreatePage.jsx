import { useState } from "react";
import styles from "./styles.module.css";
import { CreateCommunity } from "./CreateCommunity";
import { CreateProduct } from "./CreateProduct";
import { CreatePost } from "./CreatePost";

export const CreatePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className={styles.createPage}>
      <h1 className={styles.pageTitle}>Create</h1>

      <div className={styles.createTabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "posts" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Create Post
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "product" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("product")}
        >
          Create Product
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "community" ? styles.tabActive : ""
          }`}
          onClick={() => setActiveTab("community")}
        >
          Create Community
        </button>
      </div>

      {activeTab === "product" && <CreateProduct />}

      {activeTab === "community" && <CreateCommunity />}
      {activeTab === "posts" && <CreatePost />}
    </div>
  );
};

export default CreatePage;
