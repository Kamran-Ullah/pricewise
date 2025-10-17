import { createContext, useEffect, useState } from "react";
import { category } from "../assets/assets.js";
import { shoesCategory } from "../assets/ShoesImg/shoesAssets.js";
import { cosmeticsCategory } from "../assets/cosmeticsImg/cosmeticsAssets.js";
import { clothesCategory } from "../assets/clothesImg/clothesAssets.js";
import { technologyCategory } from "../assets/technolgyImg/technologyAssets.js";
import { allProduct } from "../assets/AllProduct/allAssests.js";

export const storeContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // To set backend url
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const contextValue = {
    category,
    shoesCategory,
    cosmeticsCategory,
    clothesCategory,
    technologyCategory,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    allProduct,
    url,
    token,
    setToken,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
