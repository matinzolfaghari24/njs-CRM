import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const addHandler = () => {
    setForm({
      ...form,
      products: [...form.products, { name: "", price: "", qty: "" }],
    });
    console.log(form.products);
  };
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...form.products];
    newProducts[index][name] = value;
    setForm({
      ...form,
      products: newProducts,
    });
  };
  const deleteHandler = (index) => {
    const newProducts = [...form.products];
    newProducts.splice(index, 1);
    setForm({
      ...form,
      products: newProducts,
    });
  };
  return (
    <div> 
      <div className="flex items-center justify-between mb-6">
        <p className="text-lg font-semibold text-white">Purchased Products</p>
        <button
          onClick={addHandler}
          className="px-4 py-2 bg-cyan-600  focus:outline-none hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          + Add Item
        </button>
      </div>

      <div className="space-y-4">
        {form.products &&
          form.products.map((product, index) => (
            <ProductItem
              key={index}
              product={product}
              changeHandler={(e) => changeHandler(e, index)}
              deleteHandler={() => deleteHandler(index)}
            />
          ))}
      </div>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div className="p-6  rounded-lg border border-blue-500 hover:border-cyan-500 transition duration-300">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          name="qty"
          label="Qty"
          type="text"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <div className="flex justify-end pt-4 border-t border-gray-600">
        <button
          onClick={deleteHandler}
          className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
