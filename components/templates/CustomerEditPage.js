import { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import moment from "moment";

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : "";
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || [],
    date,
  });
  const router = useRouter();
  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { status, message } = await res.json();
    if (status === "success") {
      toast.success(message || "Customer edited successfully");
      router.back();
    } else {
      toast.error(message || "Something went wrong!");
    }
  };
  const cancelHandler = () => {
    router.back();
  };
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-0 py-4 sm:py-6 md:py-8">
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl mb-6 sm:mb-8">
        <h4 className="text-2xl sm:text-3xl font-bold text-white">Edit Customer</h4>
        <p className="text-cyan-100 text-sm sm:text-base mt-2">
          Fill in the details below to edit customer to your CRM
        </p>
      </div>
      <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
        <Form form={form} setForm={setForm} />
        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700">
          <button
            onClick={cancelHandler}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={editHandler}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Edit Customer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerEditPage;
