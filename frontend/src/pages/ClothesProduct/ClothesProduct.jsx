import React, { useContext } from "react";
import { storeContext } from "../../context/storeContext";
import ProductItem from "./ProductItem";

const ClothesProduct = () => {
  const { clothesCategory } = useContext(storeContext);
  return (
    <div className="product-display" id="product-display">
      <h2>Explore Clothes</h2>
      <div className="product-display-list">
        {clothesCategory.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesProduct;
