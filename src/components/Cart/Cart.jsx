import React from "react";
import Navigation from "../Navigation/Navigation";
import { useOutletContext } from "react-router-dom";
const Cart = () => {
  const { productData, cart } = useOutletContext();
  return (
    <>
      <h1>Cart Page</h1>
      <ol>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} />
            <p>{item.title}</p>
            <p>{item.amount}</p>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Cart;
