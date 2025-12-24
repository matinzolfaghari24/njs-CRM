import Card from "../modules/Card";

function HomePage({ customers }) {
  return (
    <div className="w-full">
      <div className="space-y-2 sm:space-y-3">
        {customers.map((customer) => (
          <Card key={customer._id} customer={customer} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
