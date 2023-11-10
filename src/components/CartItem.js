import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const {removeFromCart,decreaseAmount,addtoCart} = useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:py-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & Icon */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={()=>removeFromCart(id)} className="cursor-pointer text-xl">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* minus icon */}
              <div onClick={()=>decreaseAmount(id)} className="flex h-full flex-1 justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* plus icon */}
              <div onClick={()=>addtoCart(item,id)} className="flex h-full flex-1 justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex flex-1 justify-around items-center" >$ {price}</div>
            {/* Final Price */}
            <div className="flex flex-1 justify-end items-center text-primary font-medium" >{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
