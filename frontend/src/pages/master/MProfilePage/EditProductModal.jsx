import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const EditProductModal = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    size: "",
    cost: "",
    delivery: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || "",
        size: product.size || "",
        cost: product.cost || "",
        delivery: product.delivery || "",
        image: product.image || "",
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.size && formData.cost && formData.delivery) {
      onSave({
        ...product,
        ...formData,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Edit Product</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter product title"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Size</label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter size"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Price</label>
            <input
              type="text"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter price"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Delivery Type</label>
            <select
              name="delivery"
              value={formData.delivery}
              onChange={handleChange}
              className={styles.formInput}
              required
            >
              <option value="">Select delivery type</option>
              <option value="Nova Poshta">Nova Poshta</option>
              <option value="Ukrposhta">Ukrposhta</option>
              <option value="Courier">Courier</option>
              <option value="Pickup">Pickup</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Image URL (optional)</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className={styles.formInput}
              placeholder="Enter image URL"
            />
          </div>

          <div className={styles.modalActions}>
            <button
              type="button"
              className={`${styles.modalButton} ${styles.cancelButton}`}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${styles.modalButton} ${styles.saveButton}`}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
