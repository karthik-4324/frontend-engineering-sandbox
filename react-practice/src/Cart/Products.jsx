import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../contexts/CartContext.jsx";
import { Link } from "react-router-dom";
import "../index.css"

function Products() {
  const [products, setProducts] = useState([]);

  const { dispatch } = useCart();

  const getProducts = async (url) => {
    const { data } = await axios.get(url);
    setProducts(data.products);
  };

  useEffect(() => {
    const URL = "https://dummyjson.com/products";
    getProducts(URL);
  }, []);

  const onAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const onRemoveCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: productId,
    });
  };

  return (
    <>
      <h1>Shopee</h1>

      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`} className="product-link">
            <p>Title - {product.title}</p>
            <p>Category - {product.category}</p>
            <p>Price - {product.price}</p>
            <p>Rating - {product.rating}</p>
            <p>Discount - {product.discount}</p>
          </Link>

          <button onClick={() => onAddToCart(product)}>Add to Cart</button>

          <button onClick={() => onRemoveCart(product.id)}>
            Remove Product
          </button>
        </div>
      ))}
    </>
  );
}

export default Products;
