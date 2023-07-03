import { BsCheck2All } from "react-icons/bs";

const AboutUs = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-7 px-7 lg:py-12">
      <h1 className="text-sky-800 text-2xl font-bold border-b-4 border-sky-600">TENTANG KAMI</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm md:w-10/12 md:text-xl lg:gap-12 lg:w-11/12 lg:text-lg ">
        <div>
          <p className="text-justify my-5 lg:my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="mx-2">
            <p className="flex space-x-3 items-center">
              <BsCheck2All className="text-3xl text-blue-500" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
            </p>
            <p className="flex space-x-3 items-center my-2">
              <BsCheck2All className="text-3xl text-blue-500" /> <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>
            </p>
            <p className="flex space-x-3 items-center">
              <BsCheck2All className="text-3xl text-blue-500" /> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
            </p>
          </div>
        </div>
        <div>
          <p className="text-justify my-3 lg:my-0 lg:mb-6 lg:mt-8">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-white border-2 border-blue-500 px-5 py-2 rounded text-blue-500 hover:bg-blue-100 active:bg-blue-300">Pelajari Selengkapnya</button>
        </div>{" "}
      </div>
    </section>
  );
};

export default AboutUs;
