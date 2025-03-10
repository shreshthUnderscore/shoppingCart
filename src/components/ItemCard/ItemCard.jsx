import React from "react";
import styles from "./ItemCard.module.css";
import { useOutletContext } from "react-router-dom";

const ItemCard = ({ data, itemCount, handleIncrement, handleDecrement }) => {
  return (
    <>
      <div className={styles.card}>
        <img src={data.image} />
        <p>{data.title}</p>
        <form className={styles.form}>
          <input type="numeric" value={itemCount} />
          <button id="decrement" onClick={handleDecrement}>
            -
          </button>
          <button id="increment" onClick={handleIncrement}>
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default ItemCard;
