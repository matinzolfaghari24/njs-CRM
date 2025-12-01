import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function Card({ customer }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const response = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.status === "success") {
      toast.success(data.message || "Customer deleted successfully");
      router.reload();
    }
  };

  return (
    <div className="border border-blue-500 flex justify-between rounded-lg m-3 p-4 items-center max-sm:flex-col max-sm:items-start max-sm:gap-2">
      <div className="flex gap-5 max-lg:flex-col max-sm:gap-1">
        <p>
          {customer.name} {customer.lastName}
        </p>
        <p>{customer.email}</p>
      </div>
      <div className="max-sm:w-full  flex justify-end gap-2">
        <button
          onClick={deleteHandler}
          className="text-red-500 border border-red-500 px-2 py-1 rounded-lg hover:bg-red-900"
        >
          Delete
        </button>
        <Link
          href={`/edit/${customer._id}`}
          className="text-green-300 border border-green-300 px-2 py-1 rounded-lg hover:bg-green-900"
        >
          Edit
        </Link>
        <Link
          href={`/customers/${customer._id}`}
          className="text-green-300 border border-green-300 px-2 py-1 rounded-lg hover:bg-green-900"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
