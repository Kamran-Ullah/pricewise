import React, { useContext } from "react";
import "./CosmeticsProduct.css";
import { storeContext } from "../../context/storeContext";
import ProductItem from "./ProductItem";

const CosmeticsProduct = () => {
  const { cosmeticsCategory } = useContext(storeContext);

  return (
    <div className="product-display" id="product-display">
      <h2>Explore Cosmetics</h2>
      <div className="product-display-list">
        {cosmeticsCategory.map((item, index) => {
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

export default CosmeticsProduct;
