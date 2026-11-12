import { Link, Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/Home.jsx";
import { Cart } from "../src/pages/Cart.jsx";
import { About } from "../src/pages/About.jsx";
import { Login } from "./pages/Login.jsx";
import { NavLink } from "react-router-dom";
import { PrivateRoute } from "./components/Private Route/index.jsx";

function RouterApp() {
  const getStyles = ({ isActive }) => {
    return {
      color: isActive ? "red" : " ",
    };
  };
  return (
    <>
      <NavLink to="/" style={getStyles} end>
        Home
      </NavLink>
      ||
      <NavLink to="/Cart" style={getStyles}>
        Cart
      </NavLink>
      ||
      <NavLink to="/About" style={getStyles}>
        About
      </NavLink>
      ||
      <NavLink to="/Login" style={getStyles}>
        Login
      </NavLink>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
export default RouterApp;
