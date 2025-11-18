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
          <ProductItem
            key={index}
            product={product}
            changeHandler={(e) => changeHandler(e, index)}
            deleteHandler={() => deleteHandler(index)}
          />
        ))}
    </div>
  );
}

export default ItemList;

function ProductItem({ product, changeHandler, deleteHandler }) {
  return (
    <div>
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
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
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
