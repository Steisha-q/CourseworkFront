import { useState, useMemo } from "react";
import styles from "./styles.module.css";
import { ProfileHeader } from "./ProfileHeader";

export const MProfilePage = () => {
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    {
      id: 1,
      image: "/api/placeholder/400/400",
      title: "Cosy Shirt",
      size: "43",
      cost: "150 €",
      delivery: "Nova Poshta",
      likes: 124,
      comments: 23,
    },
    {
      id: 2,
      image: "/api/placeholder/400/400",
      title: "Comfortable Sneakers",
      size: "43",
      cost: "400 €",
      delivery: "Nova Poshta",
      likes: 89,
      comments: 15,
    },
    {
      id: 3,
      image: null,
      title: "Elegant Coat",
      size: "M",
      cost: "280 €",
      delivery: "Ukrposhta",
      likes: 67,
      comments: 8,
    },
    {
      id: 4,
      image: "/api/placeholder/400/400",
      title: "Origin Kneetwear",
      size: "L",
      cost: "320 €",
      delivery: "Nova Poshta",
      likes: 156,
      comments: 31,
    },
    {
      id: 5,
      image: "/api/placeholder/400/400",
      title: "Classic Denim Jacket",
      size: "42",
      cost: "190 €",
      delivery: "Ukrposhta",
      likes: 98,
      comments: 12,
    },
    {
      id: 6,
      image: "/api/placeholder/400/400",
      title: "Winter Boots",
      size: "44",
      cost: "350 €",
      delivery: "Nova Poshta",
      likes: 76,
      comments: 9,
    },
  ];

  const handleEditProduct = (productId) => {
    console.log("Edit product:", productId);
  };

  const handleDeleteProduct = (productId) => {
    console.log("Delete product:", productId);
  };

  return (
    <div className={styles.profilePage}>
      <ProfileHeader />
      <div className={styles.profileNavigation}>
        <button
          className={`${styles.navBtn} ${
            activeTab === "products" ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveTab("products")}
        >
          <span>📦</span>
          Products
        </button>
        <button
          className={`${styles.navBtn} ${
            activeTab === "saved" ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveTab("saved")}
        >
          <span>🔖</span>
          Saved
        </button>
        <button
          className={`${styles.navBtn} ${
            activeTab === "tagged" ? styles.navBtnActive : ""
          }`}
          onClick={() => setActiveTab("tagged")}
        >
          <span>🏷️</span>
          Tagged
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

        {activeTab === "saved" && (
          <div className={styles.emptyState}>
            <p>No saved items</p>
            <p>Products you save will appear here</p>
          </div>
        )}

        {activeTab === "tagged" && (
          <div className={styles.emptyState}>
            <p>No tagged photos</p>
            <p>Photos you're tagged in will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MProfilePage;
