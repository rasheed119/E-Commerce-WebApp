import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addtoCart } = useContext(CartContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition duration-300 rounded-3xl hover:shadow-2xl">
        <div className="w-full h-full flex justify-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5  p-2  flex flex-col justify-center items-center gap-y-2  group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => {
              addtoCart(product, id);
            }}
          >
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500 drop-shadow-xl">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-gray-300 flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category and Title */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <h2 className="font-semibold">$ {price}</h2>
      </div>
    </div>
  );
};

export default Product;
