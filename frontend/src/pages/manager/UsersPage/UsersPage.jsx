import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./styles.module.css";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Nastia Lopushynska",
      nickname: "Steisha",
      email: "steisha@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 2,
      name: "Dasha Tadlya",
      nickname: "Dasha",
      email: "dasha@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 3,
      name: "Nikita Zalanskiy",
      nickname: "Nikita",
      email: "nikita@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 4,
      name: "Denis Kovalchuk",
      nickname: "Den",
      email: "den@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 5,
      name: "Anna Gavrylianchyk",
      nickname: "Ann",
      email: "ann@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 6,
      name: "Vasya Kog",
      nickname: "Vasya",
      email: "vasya@gmail.com",
      joined: "11.09.2025",
    },
    {
      id: 7,
      name: "Nick Johnson",
      nickname: "Nick",
      email: "nick@gmail.com",
      joined: "11.09.2025",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Видалити цього користувача?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className={styles["users-page"]}>
      <h2>Список користувачів</h2>

      <table className={styles["users-table"]}>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Nickname</th>
            <th>Email</th>
            <th>Joined Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={u.id}>
              <td data-label="№">{index + 1}</td>
              <td data-label="Name">
                <a href="#" className={styles["user-link"]}>
                  {u.name}
                </a>
              </td>
              <td data-label="Nickname">{u.nickname}</td>
              <td data-label="Email">
                <a href={`mailto:${u.email}`} className={styles["email-link"]}>
                  {u.email}
                </a>
              </td>
              <td data-label="Joined Date">{u.joined}</td>
              <td data-label="Action">
                <FaTrash
                  className={styles["icon-delete"]}
                  onClick={() => handleDelete(u.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
