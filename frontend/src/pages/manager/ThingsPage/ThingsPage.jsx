import React, { useState } from "react";
import styles from "./styles.module.css";

const ThingsPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Футболка Eco-Friendly",
      description: "Екологічна бавовняна футболка з органічних матеріалів",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
      status: "available",
    },
    {
      id: 2,
      name: "Светр з вовни",
      description: "Теплий светр з натуральної вовни, ручної роботи",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300",
      status: "available",
    },
    {
      id: 3,
      name: "Штани джинсові",
      description: "Класичні джинсові штани з органічного деніму",
      price: 800,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300",
      status: "out_of_stock",
    },
    {
      id: 4,
      name: "Плаття льняне",
      description: "Легке льняне плаття для літнього сезону",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300",
      status: "available",
    },
    {
      id: 5,
      name: "Куртка джинсова",
      description: "Стильна джинсова куртка з екологічного виробництва",
      price: 1100,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
      status: "out_of_stock",
    },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});

  const handleEditClick = (product) => {
    setEditingProduct(product.id);
    setEditedProduct({ ...product });
  };

  const handleSaveClick = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...editedProduct } : product
      )
    );
    setEditingProduct(null);
    setEditedProduct({});
  };

  const handleCancelClick = () => {
    setEditingProduct(null);
    setEditedProduct({});
  };

  const handleInputChange = (field, value) => {
    setEditedProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "Новий товар",
      description: "Опис товару",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300",
      status: "available",
    };
    setProducts([...products, newProduct]);
    setEditingProduct(newProduct.id);
    setEditedProduct({ ...newProduct });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className={styles.productsPage}>
      <div className={styles.pageHeader}>
        <h1>Управління товарами</h1>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            {editingProduct === product.id ? (
              <div className={styles.editForm}>
                <div className={styles.imageContainer}>
                  <img
                    src={editedProduct.image || product.image}
                    alt={editedProduct.name}
                    className={styles.productImage}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Фото URL:</label>
                  <input
                    type="text"
                    value={editedProduct.image || ""}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Назва:</label>
                  <input
                    type="text"
                    value={editedProduct.name || ""}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Опис:</label>
                  <textarea
                    value={editedProduct.description || ""}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className={styles.textarea}
                    rows="3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Ціна (₴):</label>
                  <input
                    type="number"
                    value={editedProduct.price || ""}
                    onChange={(e) =>
                      handleInputChange("price", parseFloat(e.target.value))
                    }
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Статус:</label>
                  <select
                    value={editedProduct.status || "available"}
                    onChange={(e) =>
                      handleInputChange("status", e.target.value)
                    }
                    className={styles.select}
                  >
                    <option value="available">В наявності</option>
                    <option value="out_of_stock">Немає в наявності</option>
                  </select>
                </div>

                <div className={styles.formActions}>
                  <button
                    onClick={() => handleSaveClick(product.id)}
                    className={styles.saveButton}
                  >
                    Зберегти
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className={styles.cancelButton}
                  >
                    Скасувати
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.imageContainer}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <span
                    className={`${styles.statusBadge} ${
                      styles[product.status]
                    }`}
                  >
                    {product.status === "available" ? "В наявності" : "Немає"}
                  </span>
                </div>

                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                  <div className={styles.productPrice}>{product.price} ₴</div>
                </div>

                <div className={styles.productActions}>
                  <button
                    onClick={() => handleEditClick(product)}
                    className={styles.editButton}
                  >
                    Редагувати
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className={styles.deleteButton}
                  >
                    Видалити
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsPage;
