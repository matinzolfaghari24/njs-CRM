import React, { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";

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
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.push("/");
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
    <div>
      <h4>Add New Customer</h4>
      <Form form={form} setForm={setForm} />
      <div>
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
