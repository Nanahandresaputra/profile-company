import { BsFillBuildingsFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const link = ["Beranda", "Tentang Kami", "Produk", "Terms of service", "Privacy Policy", "Kontak"];
  return (
    <section className="bg-sky-800 top-0 py-10 px-5  justify-items-center grid grid-cols-2 lg:px-10 lg:grid-cols-3 text-white">
      <div>
        <div className="flex items-center space-x-2 md:place-self-start mb-4">
          <BsFillBuildingsFill className="text-3xl md:text-6xl" />
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold md:text-xl">Lorem Ipsum</h1>
            <p className="text-sm md:text-sm">Company</p>
          </div>
        </div>
        <p className="hidden lg:block">Jl. Raya No.11, Desa/Keluarahan Pilangsari, Kec. Jatitujuh, Kab. Majalengka, Provinsi Jawa Barat</p>
        <div className="hidden md:block">
          <p>
            <span className="font-bold">Phone</span>: <span>+62 82 xxxx xxxx</span>
          </p>
          <p>
            <span className="font-bold">Email</span>: <span>loremipsum@email.com</span>
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        <h1 className="text-xl font-semibold mb-8">Usefful Link</h1>
        <div className="grid grid-cols-2 items-center">
          {link?.map((index, i) => (
            <p className="flex space-x-2" key={i}>
              <MdKeyboardArrowRight className="text-2xl" /> <span className="">{index}</span>{" "}
            </p>
          ))}
        </div>
      </div>

      <div className="">
        <h1 className="font-semibold md:mb-4 lg:mb-8 md:text-lg">Jejaring Sosial Kami</h1>
        <p className="text-justify text-xs hidden md:text-base md:block">Tomorrow fermentum hate eu feugiat lide par naso tierra videa magna derita valies</p>
        <div className="flex space-x-2 justify-center mt-3 text-white text-xl md:justify-start md:text-2xl">
          <AiFillInstagram className="hover:text-gray-200 active:text-gray-300 cursor-pointer" />
          <FaFacebookF className="hover:text-gray-200 active:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-200 active:text-gray-300 cursor-pointer" />
          <FaTwitter className="hover:text-gray-200 active:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
