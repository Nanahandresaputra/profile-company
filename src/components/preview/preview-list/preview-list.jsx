const PreviewList = ({ num, text }) => {
  return (
    <section className="bg-white shadow-lg p-3 flex items-center rounded my-4 space-x-2 font-semibold">
      <p className="text-sky-500 text-xl">{num}</p>
      <p className="text-lg ">{text}</p>
    </section>
  );
};

export default PreviewList;
