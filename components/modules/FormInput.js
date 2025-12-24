function FormInput({ name, label, type, value, onChange }) {
  return (
    <div className="mb-3 sm:mb-4">
      <label
        htmlFor={name}
        className="block text-xs sm:text-sm font-semibold text-gray-100 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-300 placeholder-gray-400"
      />
    </div>
  );
}

export default FormInput;
