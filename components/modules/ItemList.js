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
      <p>Purchased Products</p>
      <button onClick={addHandler}>Add Item</button>
      {form.products &&
        form.products.map((product, index) => (
          <div key={index}>
            <FormInput
              name="name"
              label="Product Name"
              type="text"
              value={product.name}
              onChange={(e) => changeHandler(e, index)}
            />
            <div>
              <FormInput
                name="price"
                label="Price"
                type="text"
                value={product.price}
                onChange={(e) => changeHandler(e, index)}
              />
              <FormInput
                name="qty"
                label="Qty"
                type="text"
                value={product.qty}
                onChange={(e) => changeHandler(e, index)}
              />
            </div>
            <button onClick={() => deleteHandler(index)}>Delete</button>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
