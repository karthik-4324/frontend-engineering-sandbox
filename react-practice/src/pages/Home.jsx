import { useNavigate } from "react-router-dom";
export function Home() {
  const navigate = useNavigate();
  const onGoToCart = () => {
    navigate("Cart");
  };
  return (
    <>
      <p>This is Home page </p>
      <button onClick={onGoToCart}>Add to Cart</button>
    </>
  );
}
