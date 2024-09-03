const Input = ({ searchInput, handleChange, placeholder }) => {
  return (
    <input
      className="border min-w-72 p-2 rounded-sm"
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
