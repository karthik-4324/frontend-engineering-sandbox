import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/LoginContext.jsx";

export const PrivateRoute = ({children}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/Login" />;
};
