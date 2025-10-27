import React from "react";
import styles from "./styles.module.css";

// Міні-компонент ProductCard, включений сюди
const ProductCard = ({ name, size, cost, deliveryType, imageSrc }) => (
  // Клас .product-item відповідає за контейнер картинки та тексту
  <div className={styles["product-item"]}>
    {/* Контейнер для фото (на референсі це просто placeholder) */}
    <div className={styles["product-img-container"]}>
      <img src={imageSrc} alt={name} className={styles["product-image"]} />
    </div>

    <div className={styles["product-details"]}>
      {/* Використовуємо <strong> для виділення міток, як на скріншоті */}
      <p>**Name:** {name}</p>
      <p>**Size:** {size}**</p>
      <p>**Cost:** {cost} ₴</p>
      <p>**Delivery type:** {deliveryType}**</p>
    </div>
    <span className={styles["checkbox-placeholder"]}>☐</span>
  </div>
);

const MProfilePage = () => {
  const profileData = {
    nickname: "Nickname",
    posts: 8,
    followers: "1m.",
    signed: 51,
    aboutMe: "About me",
    profilePic: "/path/to/profile/image.png",
  };

  const productsData = [
    {
      name: "Cosy Shirt",
      size: 43,
      cost: 150,
      deliveryType: "Nova Poshta",
      imageSrc: "/img/shirt.png",
    },
    {
      name: "Origin Kneetwear",
      size: 43,
      cost: 400,
      deliveryType: "Nova Poshta",
      imageSrc: "/img/knitwear.png",
    },
    {
      name: "Comfortable Sneakers",
      size: 39,
      cost: 320,
      deliveryType: "Ukrposhta",
      imageSrc: "/img/sneakers.png",
    },
    {
      name: "Elegant Coat",
      size: 43,
      cost: 320,
      deliveryType: "Ukrposhta",
      imageSrc: "/img/coat.png",
    },
    {
      name: "Nice Panama",
      size: "for teens",
      cost: 220,
      deliveryType: "Nova Poshta",
      imageSrc: "/img/panama1.png",
    },
    {
      name: "Nice Panama",
      size: "for teens",
      cost: 220,
      deliveryType: "Nova Poshta",
      imageSrc: "/img/necklace.png",
    },
  ];

  const column1 = productsData.filter((_, index) => index % 2 === 0);
  const column2 = productsData.filter((_, index) => index % 2 !== 0);

  return (
    <div className={styles["page-container"]}>
      {/* Лівий сайдбар (якщо він є у вас) */}
      <div className={styles["sidebar"]}>
        {/* ... вміст сайдбару, якщо потрібно ... */}
      </div>

      {/* Основний контент профілю */}
      <div className={styles["profile-content-wrapper"]}>
        {/* Блок Шапки Профілю */}
        <div className={styles["profile-header"]}>
          <div className={styles["header-left"]}>
            <div className={styles["profile-pic-placeholder"]}>
              <span className={styles["profile-label-text"]}>Profile</span>
            </div>
            <p className={styles["nickname"]}>{profileData.nickname}</p>
          </div>

          <div className={styles["header-right"]}>
            <button className={styles["edit-button"]}>Edit profile</button>
            <div className={styles["stats-row"]}>
              <span>**{profileData.posts}** Posts</span>
              <span>**{profileData.followers}** Followers</span>
              <span>**{profileData.signed}** Signed</span>
            </div>
          </div>
          <p className={styles["about-me-link"]}>{profileData.aboutMe}</p>
        </div>

        {/* Блок Навігації (Таби) */}
        <div className={styles["tab-navigation"]}>
          <div className={styles["tab-item-active"]}></div>
          <div className={styles["tab-item"]}></div>
        </div>

        {/* Блок Товарів (Сітка) */}
        <div className={styles["products-grid"]}>
          <div className={styles["products-column"]}>
            {column1.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className={styles["products-column"]}>
            {column2.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MProfilePage;
