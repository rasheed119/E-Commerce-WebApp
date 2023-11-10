import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { Open, handleClose } = useContext(SidebarContext);
  const { Cart, ClearCart, total } = useContext(CartContext);
  return (
    <div
      className={`${
        Open ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[70vw] xl:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-scroll`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ( {Cart.length} )
        </div>
        <div>
          <IoMdArrowForward
            className="text-2xl w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={handleClose}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 overflow-x-hidden border-b">
        {Cart.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      <div className=" flex flex-col mt-4 gap-y-3 py-4">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total :</span> $ {total}
          </div>
          {/* Clear Cart icon */}
          {Cart.length >= 1 && (
            <div
              onClick={ClearCart}
              className="cursor-pointer py-4 bg-red-500 w-12 h-12 flex justify-center items-center text-white text-xl rounded-lg"
            >
              <FiTrash2 />
            </div>
          )}
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
