import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="space-y-6">
      <div className="border-b border-blue-500 pb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="name"
            label="Name"
            type="text"
            value={form.name}
            onChange={changeHandler}
          />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            value={form.lastName}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="border-b border-blue-500 pb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="email"
            label="Email"
            type="text"
            value={form.email}
            onChange={changeHandler}
          />
          <FormInput
            name="phone"
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={changeHandler}
          />
        </div>
      </div>

      <div className="border-b border-blue-500 pb-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Address Information
        </h3>
        <FormInput
          name="address"
          label="Address"
          type="text"
          value={form.address}
          onChange={changeHandler}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            name="postalCode"
            label="Postal Code"
            type="text"
            value={form.postalCode}
            onChange={changeHandler}
          />
          <FormInput
            name="date"
            label="Date"
            type="date"
            value={form.date}
            onChange={changeHandler}
          />
        </div>
      </div>

      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
