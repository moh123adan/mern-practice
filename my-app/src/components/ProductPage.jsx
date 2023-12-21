import React, { useEffect, useState } from "react";
import axios from "axios";
function ProductPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await axios.post("http://localhost:5000/products", formData);
    console.log(res);
  };

  return (
    <div>
      <h1>Hello this is product page</h1>
      <h4>Add New Product</h4>
      <form action="" onSubmit={submit}>
        Name
        <input type="text" name="name" id="name" />
        <br />
        Cost
        <input type="number" name="cost" id="cost" />
        <br />
        Quantity
        <input type="number" name="quantity" id="quantity" />
        <br />
        Sales Price
        <input type="number" name="salesPrice" id="salesPrice" />
        <br />
        <input type="file" name="image" id="image" />
        <br />
        <button type="submit">Save</button>
      </form>

      <h1>Products</h1>
      {products &&
        products.map((product) => (
          <div key={product._id}>
            {product.image ? (
              <img
                src={`http://localhost:5000/uploads/${product.image}`}
                alt=""
                width={100}
                height={100}
              />
            ) : (
              <img
                src={`https://images.pexels.com/photos/19051375/pexels-photo-19051375/free-photo-of-living-room-with-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`}
                alt=""
                width={100}
                height={100}
              />
            )}
            {product.name}
            {product.price}
            {product.cost}
          </div>
        ))}
    </div>
  );
}

export default ProductPage;
