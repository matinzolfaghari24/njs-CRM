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
    <div className="border border-blue-500 flex flex-col sm:flex-row sm:justify-between rounded-lg m-2 sm:m-3 p-3 sm:p-4 gap-3 sm:gap-4 sm:items-center">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 text-sm sm:text-base">
        <p className="font-semibold">
          {customer.name} {customer.lastName}
        </p>
        <p className="text-gray-300">{customer.email}</p>
      </div>
      <div className="w-full sm:w-auto flex justify-start sm:justify-end gap-2">
        <button
          onClick={deleteHandler}
          className="text-red-500 border border-red-500 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-red-900 transition duration-300 flex-1 sm:flex-none"
        >
          Delete
        </button>
        <Link
          href={`/edit/${customer._id}`}
          className="text-green-300 border border-green-300 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-green-900 transition duration-300 flex-1 sm:flex-none text-center"
        >
          Edit
        </Link>
        <Link
          href={`/customers/${customer._id}`}
          className="text-green-300 border border-green-300 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-lg hover:bg-green-900 transition duration-300 flex-1 sm:flex-none text-center"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
