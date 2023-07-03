import Input from "./input-fields/input";

const Contactus = () => {
  return (
    <section className="bg-indigo-50 py-10 px-5 flex flex-col items-center">
      <h1 className="text-sky-800 text-2xl text-center my-8 w-7/12 font-bold border-b-4 border-sky-600 md:w-52">HUBUNGI KAMI</h1>
      <form className="bg-white w-full grid grid-cols-1 items-center gap-3 shadow-2xl border-t-8 border-b-8 py-8 px-3 rounded border-blue-400 md:grid-cols-2 md:w-10/12 lg:w-8/12">
        <Input label="Nama kamu" type="text" style="" />
        <Input label="Email kamu" type="email" style="" />
        <Input label="Subjek" type="text" style="md:w-full md:col-span-2" />
        <label className="flex flex-col space-y-2 mt-2 w-full md:col-span-2">
          <span className="text-gray-600 font-medium">Pesan : </span>
          <textarea placeholder="pesan" className="outline-none border border-gray-500 bg-gray-100 p-3 rounded h-32" />
        </label>
        <button type="button" className="my-5 text-white text-sm bg-sky-600 px-7 py-2 rounded-lg hover:bg-sky-700 active:bg-sky-800 cursor-pointer md:text-base md:col-span-2">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
};

export default Contactus;
