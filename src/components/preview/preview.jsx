import previewImg from "../../assets/img-preview.png";
import PreviewList from "./preview-list/preview-list";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GiAutoRepair } from "react-icons/gi";
import PreviewCard from "./preview-card/preview-card";
import { BsCloudCheck } from "react-icons/bs";
import { RiShieldCheckFill } from "react-icons/ri";

const Preview = () => {
  return (
    <section className="p-5 bg-indigo-50 items-center justify-items-center grid grid-cols-1 gap-3 lg:grid-cols-2">
      <img src={previewImg} alt="preview" className="w-9/12 md:w-6/12 lg:w-9/12 lg:order-2" />
      <div className="flex flex-col space-y-4 md:w-9/12 lg:order-1">
        <p className="text-lg mx-1 text-blue-900">
          Impian Kami Dalam Membangun <span className="font-bold"> Sistem Bisnis Yang Dapat Di Pelajari Oleh Pemula Dengan Bimbingan Mentor Ahli</span>
        </p>
        <div>
          <PreviewList num="01." text="Apa sih  Visi dari perusahaan kami?" />
          <PreviewList num="02." text="Bagaimana dengan misi kami?" />
          <PreviewList num="03." text="Kenapa harus memilih bisnis kami?" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 md:w-9/12 lg:grid-cols-4 lg:w-10/12 lg:col-span-2 lg:order-3">
        <PreviewCard icon={<LiaStoreAltSolid />} title="Modern Bisnis" detail="Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital  " />
        <PreviewCard icon={<BsCloudCheck />} title="Trend Produk" detail="Dengan banyaknya permintaan pasar dan hasil riset sehingga mudah untuk dijual" />
        <PreviewCard icon={<GiAutoRepair />} title="Uji Lab" detail="Produk yang sudah diuji kualitasnya melalui teknologi canggih labolatorium" />
        <PreviewCard icon={<RiShieldCheckFill />} title="Keamanan Sistem" detail="Data yang ada dalam sistem akan secara otomatis terenkripsi sehingga tidak akan ada kebocoran data" />
      </div>
    </section>
  );
};

export default Preview;
