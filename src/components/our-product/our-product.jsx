import headpone from "../../assets/headphone.jpg";
import headset from "../../assets/headset.png";
import keyboard from "../../assets/keyboard.jpg";
import laptopAsus from "../../assets/laptop-asus.png";
import laptopLenovo from "../../assets/laptop-lenovo.jpg";
import speaker from "../../assets/speaker.jpg";
import samsung from "../../assets/samsung.jpg";
import mouse from "../../assets/mouse.jpg";

const OurProduct = () => {
  const produk = [
    {
      image: headpone,
      title: "headphone",
    },
    {
      image: keyboard,
      title: "keyboard",
    },
    {
      image: laptopAsus,
      title: "laptopAsus",
    },
    {
      image: samsung,
      title: "samsung",
    },
    {
      image: laptopLenovo,
      title: "laptopLenovo",
    },
    {
      image: headset,
      title: "headset",
    },
    {
      image: speaker,
      title: "speaker",
    },
    {
      image: mouse,
      title: "mouse",
    },
  ];

  return (
    <section id="produk" className="py-10 px-5 flex flex-col items-center justify-center lg:py-12 space-y-7">
      <h1 className="text-sky-800 text-2xl font-bold border-b-4 border-sky-600">PRODUK KAMI</h1>
      <p className="text-justify text-gray-600 md:w-9/12 md:text-lg">Produk Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..</p>
      <div className="flex flex-wrap space-x-3 space-y-4 justify-center">
        {/* <div className="grid items-center justify-items-center grid-cols-1 gap-4 w-8/12 md:w-10/12 md:grid-cols-2 lg:grid-cols-3"> */}
        {produk?.map((index, i) => (
          <img src={index.image} alt={index.title} key={i} className=" w-8/12 h-auto md:w-4/12 lg:w-3/12" />
        ))}
      </div>
      <button className="text-white bg-sky-600 px-7 py-2 rounded hover:bg-sky-700 active:bg-sky-800 cursor-pointer md:text-base">Produk Lainnya</button>
    </section>
  );
};

export default OurProduct;
