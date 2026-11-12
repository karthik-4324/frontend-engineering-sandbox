import { useCart } from "../contexts/CartContext.jsx";

function NavBar() {
  const { cart } = useCart();

  return (
    <nav>
      <h2>Shopee</h2>
      <p>Cart Items: {cart.length}</p>
    </nav>
  );
}

export default NavBar;
