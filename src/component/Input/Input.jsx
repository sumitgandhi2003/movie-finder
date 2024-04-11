const Input = ({ searchInput, handleChange, placeholder }) => {
  return (
    <input
      className="border w-[350px] p-2 rounded-sm"
      value={searchInput}
      placeholder={placeholder}
      onChange={(e) => {
        handleChange(e);
      }}
      type="text"
      name=""
      id=""
    />
  );
};

export default Input;
