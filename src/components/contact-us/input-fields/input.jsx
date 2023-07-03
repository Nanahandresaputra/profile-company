const Input = ({ type, label, style }) => {
  return (
    <label className={`flex flex-col space-y-2 mt-2 w-full  ${style}`}>
      <span className="text-gray-600 font-medium">{label} : </span>
      <input type={type} placeholder={label} className="outline-none border border-gray-500 bg-gray-100 p-3 rounded " />
    </label>
  );
};

export default Input;
