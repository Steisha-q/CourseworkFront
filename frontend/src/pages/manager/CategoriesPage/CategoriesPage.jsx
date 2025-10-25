import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles.module.css";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newCategory = {
      id: Date.now(),
      name,
      description,
      status,
    };

    setCategories([...categories, newCategory]);
    setName("");
    setDescription("");
    setStatus("Active");
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  const toggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id
          ? { ...cat, status: cat.status === "Active" ? "Inactive" : "Active" }
          : cat
      )
    );
  };

  return (
    <div className={styles["categories-page"]}>
      <div className={styles["category-form"]}>
        <h2>Створити категорію</h2>
        <form onSubmit={handleAddCategory}>
          <label>
            Назва:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введіть назву категорії"
              required
            />
          </label>
          <label>
            Опис:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Введіть опис категорії"
            />
          </label>
          <label>
            Статус:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <button type="submit">Додати категорію</button>
        </form>
      </div>

      <div className={styles["category-list"]}>
        <h2>Всі категорії</h2>
        {categories.length === 0 ? (
          <p>Категорії відсутні</p>
        ) : (
          <table className={styles["category-table"]}>
            <thead>
              <tr>
                <th>
                  Name
                  <br />
                  Description
                </th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id}>
                  <td>
                    <strong>{cat.name}</strong>
                    <p>{cat.description}</p>
                  </td>
                  <td>
                    <span
                      className={
                        cat.status === "Active"
                          ? styles["status-active"]
                          : styles["status-inactive"]
                      }
                      onClick={() => toggleStatus(cat.id)}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles["icon-btn"]}>
                      <FaEdit />
                    </button>
                    <button
                      className={styles["icon-btn"]}
                      onClick={() => handleDelete(cat.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
