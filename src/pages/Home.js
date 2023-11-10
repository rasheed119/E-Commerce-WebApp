import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const products = useContext(ProductContext);
  const filtered_products = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );
  return (
    <div>
      <Hero/>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filtered_products.map((product, index) => (
              <Product product={product} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;