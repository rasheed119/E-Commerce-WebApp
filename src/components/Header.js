import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [Active, setisActive] = useState(false);
  const { Open, SetOpen } = useContext(SidebarContext);
  const { Cart } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setisActive(true) : setisActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        Active ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all duration-700`}
    >
      <div className="container flex items-center justify-between mx-auto h-full">
        <Link to={"/"}>
          <div>
            <img className="max-w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>

        <div
          onClick={() => SetOpen(!Open)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {Cart.length}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
