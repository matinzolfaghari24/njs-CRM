import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function CustomerDetailsPage({ data }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const response = await fetch(`/api/delete/${data._id}`, {
      method: "DELETE",
    });
    const newRes = await response.json();
    if (newRes.status === "success") {
      toast.success(newRes.message || "Customer deleted successfully");
      router.push("/");
    }
  };
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-0 py-4 sm:py-6 md:py-8">
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl md:shadow-2xl mb-6 sm:mb-8">
        <h4 className="text-2xl sm:text-3xl font-bold text-white">
          Customer Details
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">Name :</span>
          <p className="text-white text-lg mt-1">{data.name}</p>
        </div>
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">
            Last Name :
          </span>
          <p className="text-white text-lg mt-1">{data.lastName}</p>
        </div>
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">Phone :</span>
          <p className="text-white text-lg mt-1">{data.phone}</p>
        </div>
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">Address :</span>
          <p className="text-white text-lg mt-1">{data.address}</p>
        </div>
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">
            Postal Code :
          </span>
          <p className="text-white text-lg mt-1">{data.postalCode}</p>
        </div>
        <div className=" border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md sm:shadow-lg">
          <span className="text-gray-400 text-sm font-semibold">Date :</span>
          <p className="text-white text-lg mt-1">
            {moment(data.date).utc().format("YYYY-MM-DD")}
          </p>
        </div>
      </div>

      {data.products.length > 0 && (
        <div className="border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg mb-6 sm:mb-8">
          <div className="grid grid-cols-3 mb-4 sm:mb-6 text-gray-400 text-xs sm:text-sm font-semibold">
            <p>Name</p>
            <p>Price</p>
            <p>Qty</p>
          </div>
          {data.products.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-3  gap-4 sm:gap-6 py-3 border-b border-gray-700 last:border-b-0 hover:bg-gray-800/50 transition text-white text-sm sm:text-base"
            >
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.qty}</p>
            </div>
          ))}
        </div>
      )}

      <div className="sm:flex items-center  border border-blue-500 rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg">
        <p className="text-white font-semibold max-sm:mb-4 sm:me-4  text-base sm:text-lg">
          Edit or Delete?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 ">
          <button
            onClick={deleteHandler}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition duration-300"
          >
            Delete
          </button>
          <Link href={`/edit/${data._id}`}>
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition duration-300">
              Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
