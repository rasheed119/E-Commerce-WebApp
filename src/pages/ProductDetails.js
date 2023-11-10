import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useContext(ProductContext);
  const { addtoCart } = useContext(CartContext);
  const prod = product.find((item) => {
    return item.id === parseInt(id);
  });
  if (!prod) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, price, description, image } = prod;
  return (
    <section className="pt-32 pb-12 lg:py-12 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt="product"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addtoCart(prod,prod.id)}
              className="bg-primary text-white px-8 py-4 rounded-lg mb-16 hover:opacity-90"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
