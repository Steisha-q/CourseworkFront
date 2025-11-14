import { useState, useMemo } from "react";
import styles from "./styles.module.css";
import { ProfileHeader } from "./ProfileHeader";
import { EditProfileModal } from "./EditProfileModal";
import { EditProductModal } from "./EditProductModal";

export const MProfilePage = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [masterInfo, setMasterInfo] = useState({
    username: "MasterDesigner",
    bio: "Fashion designer with 5+ years of experience. Specializing in sustainable clothing and unique designs.",
    avatar_url: null,
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
      title: "Cosy Shirt",
      size: "43",
      cost: "150 €",
      delivery: "Nova Poshta",
      likes: 124,
      comments: 23,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      title: "Comfortable Sneakers",
      size: "43",
      cost: "400 €",
      delivery: "Nova Poshta",
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
      title: "Elegant Coat",
      size: "M",
      cost: "280 €",
      delivery: "Ukrposhta",
      likes: 67,
      comments: 8,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
      title: "Origin Kneetwear",
      size: "L",
      cost: "320 €",
      delivery: "Nova Poshta",
      likes: 156,
      comments: 31,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
      title: "Classic Denim Jacket",
      size: "42",
      cost: "190 €",
      delivery: "Ukrposhta",
      likes: 98,
      comments: 12,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=400&h=400&fit=crop",
      title: "Winter Boots",
      size: "44",
      cost: "350 €",
      delivery: "Nova Poshta",
      likes: 76,
      comments: 9,
    },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop",
      title: "New Collection Inspiration",
      content:
        "Working on my new sustainable collection. What do you think about these color combinations?",
      date: "2 hours ago",
      likes: 45,
      comments: 12,
      isLiked: false,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=400&fit=crop",
      title: "Behind the Scenes",
      content:
        "A little sneak peek into my creative process. Every detail matters!",
      date: "1 day ago",
      likes: 89,
      comments: 23,
      isLiked: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=400&fit=crop",
      title: "Sustainable Fashion Tips",
      content:
        "How to build a sustainable wardrobe without breaking the bank. Tips and tricks from a professional designer.",
      date: "3 days ago",
      likes: 156,
      comments: 34,
      isLiked: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop",
      title: "Workshop Announcement",
      content:
        "Excited to announce my upcoming online workshop about fashion design basics!",
      date: "1 week ago",
      likes: 203,
      comments: 47,
      isLiked: false,
    },
  ]);

  const handleEditProduct = (productId) => {
    const product = products.find((p) => p.id === productId);
    setEditingProduct(product);
    setIsEditProductModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== productId));
    }
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setIsEditProductModalOpen(false);
    setEditingProduct(null);
  };

  const handleUpdateProfile = (updatedInfo) => {
    setMasterInfo(updatedInfo);
    setIsEditModalOpen(false);
  };

  const handleLikePost = (postId) => {
    setPosts(
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

  const handleCommentPost = (postId) => {
    console.log("Comment on post:", postId);
  };

  return (
    <div className={styles.profilePage}>
      <ProfileHeader
        masterInfo={masterInfo}
        onEditProfile={() => setIsEditModalOpen(true)}
      />

      <div className={styles.profileNavigation}>
        <button
          className={`${styles.navBtn} ${
            activeTab === "products" ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveTab("products")}
        >
          <span>📦</span>
          My Products
        </button>
        <button
          className={`${styles.navBtn} ${
            activeTab === "posts" ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveTab("posts")}
        >
          <span>🔖</span>
          My Posts
        </button>
      </div>

      <div className={styles.productsSection}>
        {activeTab === "products" && (
          <div className={styles.productsGrid}>
            {products.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No products yet</p>
                <p>Start creating and your products will appear here</p>
              </div>
            ) : (
              products.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.title}
                        className={styles.productImage}
                      />
                    ) : (
                      <div className={styles.productPlaceholder}>
                        {product.title}
                      </div>
                    )}
                  </div>

                  <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>{product.title}</h3>

                    <div className={styles.productDetails}>
                      <div className={styles.productDetail}>
                        <span className={styles.detailLabel}>Name:</span>
                        <span className={styles.detailValue}>
                          {product.title}
                        </span>
                      </div>
                      <div className={styles.productDetail}>
                        <span className={styles.detailLabel}>Size:</span>
                        <span className={styles.detailValue}>
                          {product.size}
                        </span>
                      </div>
                      <div className={styles.productDetail}>
                        <span className={styles.detailLabel}>
                          Delivery type:
                        </span>
                        <span className={styles.detailValue}>
                          {product.delivery}
                        </span>
                      </div>
                    </div>

                    <p className={styles.productPrice}>{product.cost}</p>

                    <div className={styles.productStats}>
                      <span className={styles.productStat}>
                        ❤️ {product.likes}
                      </span>
                      <span className={styles.productStat}>
                        💬 {product.comments}
                      </span>
                    </div>

                    <div className={styles.productActions}>
                      <button
                        className={`${styles.actionBtn} ${styles.editBtn}`}
                        onClick={() => handleEditProduct(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === "posts" && (
          <div className={styles.postsGrid}>
            {posts.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No posts yet</p>
                <p>Start creating and your posts will appear here</p>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className={styles.postCard}>
                  <div className={styles.postImageContainer}>
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className={styles.postImage}
                      />
                    ) : (
                      <div className={styles.postPlaceholder}>{post.title}</div>
                    )}
                  </div>

                  <div className={styles.postInfo}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.postContent}>{post.content}</p>
                    <div className={styles.postMeta}>
                      <span className={styles.postDate}>{post.date}</span>
                      <div className={styles.postStats}>
                        <button
                          className={`${styles.postStat} ${
                            post.isLiked ? styles.postStatActive : ""
                          }`}
                          onClick={() => handleLikePost(post.id)}
                        >
                          {post.isLiked ? "❤️" : "🤍"} {post.likes}
                        </button>
                        <button
                          className={styles.postStat}
                          onClick={() => handleCommentPost(post.id)}
                        >
                          💬 {post.comments}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        masterInfo={masterInfo}
        onSave={handleUpdateProfile}
      />

      <EditProductModal
        isOpen={isEditProductModalOpen}
        onClose={() => {
          setIsEditProductModalOpen(false);
          setEditingProduct(null);
        }}
        product={editingProduct}
        onSave={handleUpdateProduct}
      />
    </div>
  );
};

export default MProfilePage;
