function FormInput({ name, label, type, value, onChange }) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} value={value} onChange={onChange} name={name} />
    </div>
  );
}

export default FormInput;
