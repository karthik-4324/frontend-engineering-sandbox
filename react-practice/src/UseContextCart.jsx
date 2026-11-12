import { useEffect,useState } from "react";
import axios from 'axios'
import {useCart} from "./contexts/CartContext.jsx"



function UseContextCart(){

    const[products,setProducts] = useState([]);

    const getProducts=async(url)=>{
        const{data} = await axios.get(url);

        setProducts(data.products);


    }
    useEffect(()=>{
        const URL = "https://dummyjson.com/products";
        getProducts(URL);
    },[])

    const { cart, dispatch } = useCart();
    const onAddToCart = (product) =>{
        dispatch({
            type:"ADD_TO_CART",
            payload:product
        })
    }

    const onRemoveCart = (productId) => {
         dispatch({
           type :"REMOVE_FROM_CART",
           payload:productId

        })
    }



    return(
    <>

    <h1>Shopee</h1>
    <p>Cart Items: {cart.length}</p>
    {
        products?.length>0 && products.map(product=>{
            return(

            <div key = {product.id}>
            <p>title - {product.title}</p>
            <p>category{product.category}</p>
            <p>price - {product.price}</p>
            <p>rating -{product.rating}</p>
            <p>discount - {product.discount}</p>
            <button onClick = {()=>onAddToCart(product)}>Add to Cart</button>
            <button onClick = {()=>onRemoveCart(product.id)}>Remove Product</button>
            </div>
            )
        }
        )
    }
    </>
    )
}
export default UseContextCart;