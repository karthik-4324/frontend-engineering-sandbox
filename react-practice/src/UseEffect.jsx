// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// function UseEffect(){
//     const[count,setCount] = useState(0);

//     useEffect(()=>{
//         document.title = `Count: ${count}`;
//     },[count])

//     return(
//         <>s
//         <button onClick = {()=>setCount(count=>count+1)}>Count - {count}</button>
//         </>
//     )

// }
// export default UseEffect;

// function UseEffect() {
//   const [products, setProducts] = useState([]);
//   const getData = async (url) => {
//     try {
//       const {
//         data: { products },} = await axios(url);
//       console.log(products);
//       setProducts(products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const URL = "https://dummyjson.com/products";
//     getData(URL);
//   }, []);

//   return (
//     <>
//       {products.map((product) => (
//         <p key={product.id}>{product.title}</p>
//       ))}
//     </>
//   );
// }
// export default UseEffect;


import { useEffect, useState } from "react";

function UseEffect() {
  const addresses = [
    { city: "mumbai", pinCode: "400029", isDefault: true },
    { city: "mumbai", pinCode: "400029", isDefault: false },
    { city: "navi mumbai", pinCode: "400701", isDefault: false },
    { city: "noida", pinCode: "201305", isDefault: false },
  ];

  const [defaultAddress, setDefaultAddress] = useState(
    addresses.find(({ isDefault }) => isDefault)
  );

  const [pinCode, setPinCode] = useState("");

  const onSetPinCodeClick = () => {
    const selectedAddress = addresses.find(
      (address) => address.pinCode === pinCode
    );

    if (selectedAddress) {
      setDefaultAddress(selectedAddress);
    }
  };


  useEffect(() => {
    console.log("This effect was called");
    // console.log(defaultAddress);
  }, [defaultAddress.pinCode]);

  return (
    <>
      <h2>Dependency Array Exercise</h2>

      <input
        placeholder="Enter pincode"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />

      <button onClick={onSetPinCodeClick}>
        Set Pincode
      </button>

      <p>
        Default Address:{" "}
        {defaultAddress?.city} - {defaultAddress?.pinCode}
      </p>
    </>
  );
}

export default UseEffect;


