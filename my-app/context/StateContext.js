import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext();

const  StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;



  const onAdd = (product, quantity) => {
    //checking if an item is already in cart
    console.log(cartItems)
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
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id)
    const newCartItems = cartItems.filter((item) => item._id !== product._id)
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    setTotalQuantities(preTotalQuanties => preTotalQuanties - foundProduct.quantity)
    setCartItems(newCartItems)
  }
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);
    if (value === "increase") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((preTotalQuanties) => preTotalQuanties + 1);
    } else if (value === "decrease") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((preTotalQuanties) => preTotalQuanties - 1);
      }
    }
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
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        toggleCartItemQuantity,
        qty,
        incrementQty,
        decrementQty,
        onAdd,
        onRemove,
        setCartItems, 
        setTotalPrice,
        setTotalQuantities
      }}
    >
      {children}
    </Context.Provider>
  );
};


export default StateContext