import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./styles.module.css";

const RaffleDetailPage = () => {
  const { id } = useParams();
  const [raffle, setRaffle] = useState(null);
  const [posts, setPosts] = useState([]);
  const [participants, setParticipants] = useState([]);

  const defaultRaffle = {
    id: "0",
    title: "Демо-розіграш",
    description: "#розіграш Демонстраційний опис розіграшу",
    prize: "Еко-сумка",
    winners: 3,
    postId: 1,
    status: "Активний",
    startDate: "2025-11-10",
    endDate: "2025-11-20",
  };

  useEffect(() => {
    setPosts([
      { id: 1, title: "Пост про еко-продукти" },
      { id: 2, title: "Нова колекція з перероблених матеріалів" },
      { id: 3, title: "Благодійний ярмарок" },
    ]);

    const raffles = JSON.parse(localStorage.getItem("raffles")) || [];
    const foundRaffle = raffles.find((r) => r.id === id) || defaultRaffle;
    setRaffle(foundRaffle);

    const defaultParticipants = [
      { id: "1", name: "Оля", email: "olya@email.com", isWinner: false },
      { id: "2", name: "Іван", email: "ivan@email.com", isWinner: false },
      { id: "3", name: "Марія", email: "maria@email.com", isWinner: false },
    ];

    if (foundRaffle.status === "Завершено") {
      const winnersCount = Math.min(
        foundRaffle.winners,
        defaultParticipants.length
      );
      setParticipants(
        defaultParticipants.map((p, i) => ({
          ...p,
          isWinner: i < winnersCount,
        }))
      );
    } else {
      setParticipants(defaultParticipants);
    }
  }, [id]);

  if (!raffle) return <p>Розіграш не знайдено</p>;

  const postTitle =
    posts.find((p) => p.id.toString() === raffle.postId?.toString())?.title ||
    "Не вибрано";
  const winners = participants.filter((p) => p.isWinner);

  return (
    <div className={styles.detailPage}>
      <Link to="/manager/raffles" className={styles.backLink}>
        ← Повернутися до списку розіграшів
      </Link>

      <div className={styles.raffleCard}>
        <div
          className={`${styles.statusBar} ${
            styles[raffle.status.toLowerCase()]
          }`}
        >
          {raffle.status}
        </div>
        <div className={styles.raffleContent}>
          <h1 className={styles.raffleTitle}>{raffle.title}</h1>
          <p className={styles.description}>{raffle.description}</p>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <strong>Виграш:</strong> {raffle.prize}
            </div>
            <div className={styles.infoItem}>
              <strong>Переможців:</strong> {raffle.winners}
            </div>
            <div className={styles.infoItem}>
              <strong>Пост:</strong> {postTitle}
            </div>
            <div className={styles.infoItem}>
              <strong>Дати:</strong> {raffle.startDate} – {raffle.endDate}
            </div>
          </div>
        </div>
      </div>

      <h2>Учасники</h2>
      <div className={styles.participantGrid}>
        {participants.map((p) => (
          <div
            key={p.id}
            className={`${styles.participantCard} ${
              p.isWinner ? styles.winner : ""
            }`}
          >
            <div className={styles.avatar}>{p.name.charAt(0)}</div>
            <div className={styles.participantInfo}>
              <p className={styles.participantName}>{p.name}</p>
              <p className={styles.participantEmail}>{p.email}</p>
            </div>
            {p.isWinner && <div className={styles.trophy}>🏆</div>}
          </div>
        ))}
      </div>

      {raffle.status === "Завершено" && winners.length > 0 && (
        <div className={styles.winners}>
          <h2>Переможці</h2>
          <ul>
            {winners.map((w) => (
              <li key={w.id}>
                {w.name} ({w.email}) 🏆
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RaffleDetailPage;
