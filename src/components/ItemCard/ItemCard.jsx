import React, { useEffect } from "react";
import styles from "./ItemCard.module.css";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const ItemCard = ({ data }) => {
  const { cart, setCart } = useOutletContext();
  const [itemCount, setItemCount] = useState(1);
  const [addOrUpdateBtn, toggleAddOrUpdateBtn] = useState(false);

  const handleIncrement = (event) => {
    event.preventDefault();
    setItemCount(itemCount + 1);
  };
  const handleDecrement = (event) => {
    event.preventDefault();
    if (itemCount != 1) {
      setItemCount(itemCount - 1);
    }
  };

  const addToCart = (event) => {
    event.preventDefault();

    setCart([...cart, { id: data.id, amount: itemCount }]);
    toggleAddOrUpdateBtn(!addOrUpdateBtn);
  };

  const updateCart = (event) => {
    event.preventDefault();
    setCart(
      cart.map((item) => {
        if (item.id == data.id) {
          return { id: item.id, amount: itemCount };
        } else {
          return item;
        }
      })
    );
  };

  const handleInputChange = (event) => {
    setItemCount(event.target.value);
  };

  useEffect(() => {
    console.log("current item count", itemCount);
  }, [itemCount]);

  return (
    <>
      <div className={styles.card}>
        <img src={data.image} />
        <p>{data.title}</p>
        <form className={styles.form}>
          <input
            type="numeric"
            value={itemCount}
            onChange={handleInputChange}
          />
          <button id="decrement" onClick={handleDecrement}>
            -
          </button>
          <button id="increment" onClick={handleIncrement}>
            +
          </button>
          <button id="updateCart" onClick={updateCart} hidden={!addOrUpdateBtn}>
            Update Cart
          </button>
          <button id="addToCart" onClick={addToCart} hidden={addOrUpdateBtn}>
            Add to Cart
          </button>
        </form>
      </div>
    </>
  );
};

export default ItemCard;
