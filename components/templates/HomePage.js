import Card from "../modules/Card";

function HomePage({ customers }) {
  return (
    // <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-xl p-8 shadow-2xl">
    //   <h1 className="text-4xl font-bold text-white mb-3">
    //     Welcome to Botostart CRM
    //   </h1>
    //   <p className="text-lg text-cyan-100">
    //     Manage customers, add new records, and view details.
    //   </p>
    // </div>
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
}

export default HomePage;
