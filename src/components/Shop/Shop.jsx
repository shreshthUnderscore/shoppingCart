import { useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router-dom";
const Shop = () => {
  const { productData, handleClick } = useOutletContext();
  const [itemCount, setItemCount] = useState(1);
  const handleIncrement = (event) => {
    event.preventDefault();
    setItemCount(itemCount + 1);
    console.log(itemCount);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setItemCount(itemCount - 1);
    console.log(itemCount);
  };

  return (
    <>
      <div className={styles.itemContainer}>
        {productData.map((productObject) => (
          <ItemCard
            key={productObject.id}
            data={productObject}
            onClick={handleClick}
            itemCount={itemCount}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
