import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState();
  const [qty, setQty] = useState(1);
  const onAdd = (product, quantity) => {
    //checking if an item is already in cart
    const checkProductInCart = cartItems.find(
      (item) => item._id == product._id
    );
    setTotalPrice((preTotalPrice) => preTotalPrice + product.price * quantity);
    setTotalQuantities((preTotalQuanties) => preTotalQuanties + quantity);

    if (checkProductInCart) {
      //if item is in cart update the quantity of the item in cart
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      //if item is not in cartItems
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty}, ${product.name} added to the cart`);
  };

  const incrementQty = () => {
    setQty((preQty) => preQty + 1);
  };
  const decrementQty = () => {
    setQty((preQty) => {
      if (preQty - 1 < 1) return 1;
      return preQty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incrementQty,
        decrementQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
