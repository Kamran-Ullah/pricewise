import { useContext } from "react";
import "./FoodDisplay.css";
import ProductItem from "../ProductItem/ProductItem.jsx";
import { storeContext } from "../../context/storeContext.jsx";

const AllProductDisplay = () => {
  const { allProduct } = useContext(storeContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Explore Product</h2>
      <div className="food-display-list">
        {allProduct.map((item, index) => {
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

export default AllProductDisplay;
