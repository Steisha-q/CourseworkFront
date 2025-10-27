import React from "react";
import styles from "./ProductCard.css";

const ProductCard = ({ name, size, cost, deliveryType, imageSrc }) => (
  <div className={styles["product-card"]}>
    <img src={imageSrc} alt={name} className={styles["product-image"]} />
    <div className={styles["product-info"]}>
      <p className={styles["product-name"]}>
        <span className={styles["label"]}>Name:</span> {name}
      </p>
      <p>
        <span className={styles["label"]}>Size:</span> {size}
      </p>
      <p>
        <span className={styles["label"]}>Cost:</span> {cost}{" "}
        <span className={styles["currency"]}>₴</span>
      </p>
      <p>
        <span className={styles["label"]}>Delivery type:</span> {deliveryType}
      </p>
      <span className={styles["delivery-icon-wrapper"]}>
        <i
          className="fa-solid fa-person-walking-luggage"
          title="Delivery available"
        ></i>
      </span>
    </div>
  </div>
);

export default ProductCard;
