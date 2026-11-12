// // import { useState } from "react";

// // function App() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: ""
// //   });

// //   return (
// //     <>
// //       <h1>Avengers Registration 🦸</h1>

// //       <input
// //         name="name"
// //         placeholder="Name"
// //         value={formData.name}
// //         onChange={(e) =>
// //           setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //           })
// //         }
// //       />

// //       <input
// //         name="email"
// //         placeholder="Email"
// //         value={formData.email}
// //         onChange={(e) =>
// //           setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //           })
// //         }
// //       />

// //       <input
// //         name="phone"
// //         placeholder="Phone"
// //         value={formData.phone}
// //         onChange={(e) =>
// //           setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //           })
// //         }
// //       />

// //       <pre>{JSON.stringify(formData, null, 2)}</pre>
// //     </>
// //   );
// // }

// // export default App;

// import AddToCart from "./AddCart";
// // import AddToCart from "./AddToCart";

// function App() {
//   return <AddToCart />;
// }

// export default App;

// import {useCount} from './contexts/Count-context'
// import { Button } from './components/Button/Button'
// import NavBar from "./Cart/NavBar";
// import Products from "./Cart/Products";
// import { Routes, Route } from "react-router-dom";
// import ProductDetails from "./Cart/ProductDetails";
import { Counter } from "../src/./components/counter/index.jsx";

function App() {
  // const{count,setCount} = useCount();

  // const onButtonClick=()=>{
  //   setCount(count+1);
  // }

  return (
    // <Button onButtonClick = {onButtonClick} />
    <>
      {/* <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes> */}
      <Counter />
    </>
  );
}
export default App;
