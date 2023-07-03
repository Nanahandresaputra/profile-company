import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <section className="bg-sky-800 fixed top-0 w-full py-5 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2 ms-8 md:ms-10 lg:justify-center lg:w-4/12">
        <BsFillBuildingsFill className="text-5xl md:text-6xl" />
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold md:text-2xl">Lorem Ipsum</h1>
          <p className="text-sm md:text-base">Company</p>
        </div>
      </div>

      <ul className="hidden md:flex md:justify-around md:w-6/12 md:me-8 lg:justify-center lg:space-x-8">
        <li className="text-white md:text-xl hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#beranda">Beranda</a>
        </li>
        <li className="text-white md:text-xl hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#about">Tentang Kami</a>
        </li>
        <li className="text-white md:text-xl hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#produk">Produk</a>
        </li>
      </ul>

      <div className="text-4xl text-white hover:text-gray-400 active:text-gray-500 cursor-pointer me-8 md:hidden" onClick={handleOpen}>
        {open ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <ul className={open ? "bg-sky-800 text-white absolute w-full p-3 top-20 text-lg opacity-0 transition duration-500" : "bg-sky-800 text-white absolute w-full p-3 top-20 text-lg opacity-100  transition duration-500"}>
        <li className="text-white hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#beranda">Beranda</a>
        </li>
        <li className="text-white hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#about">Tentang Kami</a>
        </li>
        <li className="text-white hover:text-gray-400 active:text-gray-500 cursor-pointer">
          <a href="#produk">Produk</a>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
