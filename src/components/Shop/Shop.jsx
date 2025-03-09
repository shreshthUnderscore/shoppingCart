import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Shop = () => {
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

  function handleClick(event) {
    setCart((prevItem) => [...prevItem, event.target.getAttribute("id")]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Navigation />
      {productData.map((productObject) => (
        <div key={productObject.id}>
          <img src={productObject.image} />
          <p>{productObject.title}</p>
          <button id={productObject.id} onClick={handleClick}>
            Add
          </button>
        </div>
      ))}
    </>
  );
};

export default Shop;
