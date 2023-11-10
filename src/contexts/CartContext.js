import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [Cart, SetCart] = useState([]);
  const [total, settotal] = useState(0);

  useEffect(() => {
    const total = Cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    settotal(parseFloat(total).toFixed(2));
  }, [Cart]);

  const addtoCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const CartItem = Cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      SetCart(newCart);
    } else {
      SetCart([...Cart, newItem]);
    }
    toast.success("Added Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const removeFromCart = (id) => {
    const newCart = Cart.filter((item) => item.id !== id);
    SetCart(newCart);
    toast.success("Item Removed", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const ClearCart = () => {
    SetCart([]);
    toast.success("Cart Cleared Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const decreaseAmount = (id) => {
    const item = Cart.find((item) => item.id === id);
    if (item.amount > 1) {
      const newCart = Cart.map((product) => {
        if (product.id === id) {
          return { ...product, amount: item.amount - 1 };
        } else {
          return product;
        }
      });
      SetCart(newCart);
    } else if (item.amount === 1) {
      removeFromCart(id);
    }
  };
  return (
    <>
      <CartContext.Provider
        value={{
          addtoCart,
          Cart,
          removeFromCart,
          ClearCart,
          decreaseAmount,
          total,
        }}
      >
        {children}
      </CartContext.Provider>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default CartProvider;
