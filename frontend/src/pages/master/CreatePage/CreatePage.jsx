import { useState } from "react";
import styles from "./styles.module.css";

export const CreatePage = () => {
  const [activeTab, setActiveTab] = useState("product");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    status: "available",
  });

  const [communityForm, setCommunityForm] = useState({
    name: "",
    description: "",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Handmade Wooden Table",
      description: "Beautiful custom wooden table made from oak",
      price: 450,
      image: "/api/placeholder/200/200",
      status: "available",
    },
    {
      id: 2,
      name: "Ceramic Vase",
      description: "Handcrafted ceramic vase with unique patterns",
      price: 85,
      image: "/api/placeholder/200/200",
      status: "unavailable",
    },
  ]);

  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: "Woodworking Masters",
      description:
        "Community for professional woodworkers to share techniques and projects",
    },
    {
      id: 2,
      name: "Ceramic Artists",
      description:
        "Space for ceramic artists to showcase their work and collaborate",
    },
  ]);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCommunityChange = (e) => {
    const { name, value } = e.target;
    setCommunityForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductForm((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...productForm,
      price: parseFloat(productForm.price),
    };

    setProducts((prev) => [...prev, newProduct]);
    setProductForm({
      name: "",
      description: "",
      price: "",
      image: null,
      status: "available",
    });
  };

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    const newCommunity = {
      id: Date.now(),
      ...communityForm,
    };

    setCommunities((prev) => [...prev, newCommunity]);
    setCommunityForm({
      name: "",
      description: "",
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image,
      status: product.status,
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    setProducts((prev) =>
      prev.map((product) =>
        product.id === editingProduct.id
          ? { ...product, ...productForm, price: parseFloat(productForm.price) }
          : product
      )
    );
    setEditingProduct(null);
    setProductForm({
      name: "",
      description: "",
      price: "",
      image: null,
      status: "available",
    });
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
    setShowDeleteModal(false);
    setProductToDelete(null);
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      description: "",
      price: "",
      image: null,
      status: "available",
    });
  };

  return (
    <div className={styles.createPage}>
      <h1 className={styles.pageTitle}>Create</h1>

      <div className={styles.createTabs}>
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

      {activeTab === "product" && (
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>
            {editingProduct ? "Edit Product" : "Create New Product"}
          </h2>

          <form
            className={styles.form}
            onSubmit={
              editingProduct ? handleUpdateProduct : handleCreateProduct
            }
          >
            <div className={styles.formGroup}>
              <label className={styles.label}>Product Name</label>
              <input
                type="text"
                name="name"
                value={productForm.name}
                onChange={handleProductChange}
                className={styles.input}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <textarea
                name="description"
                value={productForm.description}
                onChange={handleProductChange}
                className={styles.textarea}
                placeholder="Describe your product..."
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Price ($)</label>
              <input
                type="number"
                name="price"
                value={productForm.price}
                onChange={handleProductChange}
                className={styles.input}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Product Image</label>
              <div className={styles.fileInput}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <div className={styles.fileInputLabel}>
                  Click to upload product image
                </div>
              </div>
              {productForm.image && (
                <div className={styles.imagePreview}>
                  <img
                    src={productForm.image}
                    alt="Preview"
                    className={styles.previewImage}
                  />
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Status</label>
              <select
                name="status"
                value={productForm.status}
                onChange={handleProductChange}
                className={styles.select}
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {editingProduct ? "Update Product" : "Create Product"}
            </button>

            {editingProduct && (
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </form>

          <div style={{ marginTop: "40px" }}>
            <h3 className={styles.formTitle}>My Products</h3>
            {products.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No products created yet</p>
              </div>
            ) : (
              <div className={styles.productsList}>
                {products.map((product) => (
                  <div key={product.id} className={styles.productCard}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                    <div className={styles.productInfo}>
                      <h4 className={styles.productName}>{product.name}</h4>
                      <p className={styles.productDescription}>
                        {product.description}
                      </p>
                      <p className={styles.productPrice}>${product.price}</p>
                      <span
                        className={`${styles.productStatus} ${
                          product.status === "available"
                            ? styles.statusAvailable
                            : styles.statusUnavailable
                        }`}
                      >
                        {product.status === "available"
                          ? "Available"
                          : "Unavailable"}
                      </span>
                    </div>
                    <div className={styles.productActions}>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => openDeleteModal(product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "community" && (
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Create New Community</h2>

          <form className={styles.form} onSubmit={handleCreateCommunity}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Community Name</label>
              <input
                type="text"
                name="name"
                value={communityForm.name}
                onChange={handleCommunityChange}
                className={styles.input}
                placeholder="Enter community name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <textarea
                name="description"
                value={communityForm.description}
                onChange={handleCommunityChange}
                className={styles.textarea}
                placeholder="Describe your community..."
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Create Community
            </button>
          </form>

          <div style={{ marginTop: "40px" }}>
            <h3 className={styles.formTitle}>My Communities</h3>
            {communities.length === 0 ? (
              <div className={styles.emptyState}>
                <p>No communities created yet</p>
              </div>
            ) : (
              <div className={styles.communitiesList}>
                {communities.map((community) => (
                  <div key={community.id} className={styles.communityCard}>
                    <h4 className={styles.communityName}>{community.name}</h4>
                    <p className={styles.communityDescription}>
                      {community.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3 className={styles.modalTitle}>Delete Product</h3>
            <p>
              Are you sure you want to delete "{productToDelete?.name}"? This
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
                onClick={() => handleDeleteProduct(productToDelete.id)}
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

export default CreatePage;
