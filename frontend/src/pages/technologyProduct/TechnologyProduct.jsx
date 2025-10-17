import React, { useContext } from "react";
import "./TechnologyProduct.css";
import { storeContext } from "../../context/storeContext";
import ProductItem from "./ProductItem";

const TechnologyProduct = () => {
  const { technologyCategory } = useContext(storeContext);

  return (
    <div className="product-display" id="product-display">
      <h2>Explore Technologies</h2>
      <div className="product-display-list">
        {technologyCategory.map((item, index) => {
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

export default TechnologyProduct;
