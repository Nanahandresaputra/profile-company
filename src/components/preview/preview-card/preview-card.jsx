const PreviewCard = ({ icon, title, detail }) => {
  return (
    <section className="bg-white shadow-lg p-5 rounded my-1 justify-center space-x-2 hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
      <div className="text-5xl text-sky-500">{icon}</div>
      <h1 className="text-xl font-semibold my-1">{title}</h1>
      <p className="text-base">{detail}</p>
    </section>
  );
};

export default PreviewCard;
