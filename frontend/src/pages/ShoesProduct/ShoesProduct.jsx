import React, { useContext } from "react";
import "./ShoesProduct.css";
import { storeContext } from "../../context/storeContext";
import ProductItem from "./ProductItem";

const ShoesProduct = () => {
  const { shoesCategory } = useContext(storeContext);

  return (
    <div className="product-display" id="product-display">
      <h2>Explore Shoes</h2>
      <div className="product-display-list">
        {shoesCategory.map((item, index) => {
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

export default ShoesProduct;
