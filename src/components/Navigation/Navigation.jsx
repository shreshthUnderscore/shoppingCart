import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("value of cart: ", cart);
  }, [cart]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
      <Outlet context={{ productData, cart, setCart }} />
    </div>
  );
};

export default Navigation;
