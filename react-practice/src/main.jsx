import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
// import ToDOList from './ToDoList.jsx'
// import FocusRef from './FocusRef'
// import UseEffect from './UseEffect'
// import UseReducer from './UseReducer'

// import { CountProvider } from './contexts/Count-context.jsx'
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../src/./store/store.js";
// import UseContextCart from "./UseContextCart";
// import { CartProvider } from "./contexts/CartContext";
// import RouterApp from "./RouterApp.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "../src/contexts/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <BrowserRouter>
  //     <AuthProvider>
  //       <RouterApp />
  //     </AuthProvider>
  //   </BrowserRouter>
  // </StrictMode>,
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
