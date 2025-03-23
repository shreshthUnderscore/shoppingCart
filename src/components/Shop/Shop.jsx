import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
const Shop = () => {
  const { productData, setCart } = useOutletContext();

  return (
    <>
      <div className={styles.itemContainer}>
        {productData.map((productObject) => (
          <ItemCard key={productObject.id} data={productObject} />
        ))}
      </div>
    </>
  );
};

export default Shop;
