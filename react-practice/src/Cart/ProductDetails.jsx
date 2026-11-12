import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

      setProduct(data);
    };

    getProduct();
  }, [id]);

  return (
    <>
      {product && (
        <>
          <h1>Product Details</h1>
          <p>Product ID : {id}</p>
          <p>availabilityStatus :{product.availabilityStatus}</p>
          <p>price :{product.price} </p>
        </>
      )}
    </>
  );
}
export default ProductDetails;
