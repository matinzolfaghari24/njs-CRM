import React, { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  const router = useRouter();
  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { status, message, data } = await res.json();
    if (status === "success") {
      toast.success(message || "Customer added successfully");
      router.push("/");
    } else {
      toast.error(message || "Something went wrong!");
    }
  };
  const cancelHandler = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
    });
    router.push("/");
  };
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-xl p-4 sm:p-6 md:p-8 shadow-2xl mb-6 sm:mb-8">
        <h4 className="text-2xl sm:text-3xl font-bold text-white">Add New Customer</h4>
        <p className="text-cyan-100 mt-2 text-sm sm:text-base">
          Fill in the details below to add a new customer to your CRM
        </p>
      </div>

      <div className="border border-blue-500 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg">
        <Form form={form} setForm={setForm} />
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
          <button
            onClick={cancelHandler}
            className="px-4 sm:px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold text-sm sm:text-base rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={saveHandler}
            className="px-4 sm:px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm sm:text-base rounded-lg shadow-md transition duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Save Customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomerPage;
