import React, { useState, useEffect } from "react";
import { ROUTES } from "@app";
import { FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const RafflesPage = () => {
  const [raffles, setRaffles] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Усі");

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "#розіграш ",
    prize: "",
    winners: 1,
    postId: "",
    status: "Активний",
    startDate: "",
    endDate: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setPosts([
      { id: 1, title: "Пост про еко-продукти" },
      { id: 2, title: "Нова колекція з перероблених матеріалів" },
      { id: 3, title: "Благодійний ярмарок" },
    ]);

    setRaffles([
      {
        id: "1",
        title: "Розіграш еко-сумки",
        description: "#розіграш Еко-сумка з переробленої тканини",
        prize: "Еко-сумка",
        winners: 3,
        postId: 1,
        status: "Активний",
        startDate: "2025-11-10",
        endDate: "2025-11-20",
      },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = (raffle = null) => {
    if (raffle) {
      setFormData(raffle);
      setIsEditing(true);
    } else {
      setFormData({
        id: null,
        title: "",
        description: "#розіграш ",
        prize: "",
        winners: 1,
        postId: "",
        status: "Активний",
        startDate: "",
        endDate: "",
      });
      setIsEditing(false);
    }
    setError("");
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, startDate, endDate, postId } = formData;

    if (!title || !description || !postId) {
      setError("Заповніть усі обов'язкові поля!");
      return;
    }
    if (!description.includes("#розіграш")) {
      setError("Опис повинен містити #розіграш!");
      return;
    }
    if (endDate && startDate && endDate < startDate) {
      setError("Дата кінця не може бути раніше дати початку!");
      return;
    }

    if (isEditing) {
      setRaffles((prev) =>
        prev.map((r) => (r.id === formData.id ? formData : r))
      );
    } else {
      setRaffles((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Ви впевнені, що хочете видалити цей розіграш?")) {
      setRaffles((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const filteredRaffles = raffles.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "Усі" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className={styles.rafflesPage}>
      <h1 className={styles.title}>Керування розіграшами</h1>

      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <FaSearch />
          <input
            type="text"
            placeholder="Пошук за назвою..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className={styles.statusFilter}
        >
          <option>Усі</option>
          <option>Активний</option>
          <option>Очікує</option>
          <option>Завершено</option>
        </select>

        <button className={styles.addBtn} onClick={() => openModal()}>
          Додати розіграш
        </button>
      </div>

      <div className={styles.rafflesGrid}>
        {filteredRaffles.length === 0 ? (
          <p className={styles.empty}>Розіграшів не знайдено</p>
        ) : (
          filteredRaffles.map((r) => (
            <div key={r.id} className={styles.raffleCard}>
              <div className={styles.cardHeader}>
                <h3>{r.title}</h3>
                <span
                  className={`${styles.status} ${
                    styles[r.status.toLowerCase()]
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <p className={styles.desc}>{r.description}</p>
              <p className={styles.detail}>
                <strong>Виграш:</strong> {r.prize}
              </p>
              <p className={styles.detail}>
                <strong>Переможців:</strong> {r.winners}
              </p>
              <p className={styles.detail}>
                <strong>{r.startDate}</strong> – <strong>{r.endDate}</strong>
              </p>
              <p className={styles.detail}>
                <strong>Пост:</strong>{" "}
                {posts.find((p) => p.id.toString() === r.postId)?.title}
              </p>
              <div className={styles.cardActions}>
                <button className={styles.editBtn} onClick={() => openModal(r)}>
                  <FaEdit /> Редагувати
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(r.id)}
                >
                  <FaTrash /> Видалити
                </button>
                <Link
                  to={ROUTES.raffledetail(r.id)}
                  className={styles.detailsBtn}
                >
                  Деталі
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>{isEditing ? "Редагування розіграшу" : "Додати розіграш"}</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Назва:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Опис (#розіграш):</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label>Виграш:</label>
                <input
                  type="text"
                  name="prize"
                  value={formData.prize}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Переможців:</label>
                  <input
                    type="number"
                    min="1"
                    name="winners"
                    value={formData.winners}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Пост:</label>
                  <select
                    name="postId"
                    value={formData.postId}
                    onChange={handleChange}
                  >
                    <option value="">Оберіть пост</option>
                    {posts.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Статус:</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Активний</option>
                    <option>Очікує</option>
                    <option>Завершено</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Дата початку:</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Дата кінця:</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.modalActions}>
                <button type="submit" className={styles.submitBtn}>
                  {isEditing ? "Оновити" : "Додати"}
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={closeModal}
                >
                  Відмінити
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RafflesPage;
