import { BsPlayBtn } from "react-icons/bs";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section id="beranda" className="bg-sky-800 mt-20 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center p-5 text-white">
      <img src={bannerImg} className="w-9/12 my-6 md:w-7/12 lg:w-8/12 lg:order-2" />
      <div className="text-center flex flex-col items-center md:w-8/12 lg:w-10/12 lg:text-start lg:order-1">
        <div>
          <h1 className="text-2xl font-semibold  md:text-4xl">Solusi Terbaik Untuk Meningkatkan Income Kamu</h1>
          <p className="my-4 md:text-xl">Perluas Jaringan Bisnis Dan Bangun Team Hebat Kamu Untuk Sukses Bersama</p>
        </div>
        <div className="flex space-x-7 my-3 md:my-8">
          <button className="text-white text-sm bg-sky-600 px-7 py-2 rounded-full hover:bg-sky-700 active:bg-sky-800 cursor-pointer md:text-base">Join Sekarang</button>
          <p className="flex space-x-2 items-center hover:text-gray-400 active:text-gray-500 cursor-pointer">
            <BsPlayBtn className="text-3xl" /> <span>Play video</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
