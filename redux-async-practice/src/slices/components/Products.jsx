import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../productSlices";

export function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <h1>Products List</h1>
      {loading && <h2>Loading...</h2>}
      {error !== null && <h2>{error}</h2>}
      {error === null &&
        loading === false &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          );
        })}
    </>
  );
}
