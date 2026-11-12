// import { useReducer } from "react";


// function UseReducer(){

//     const initialState = {
//         count : 0
//     }

//     const reducerFun = (state,action) => {
//         switch(action.type){
//             case 'INCREMENT':
//                 return{
//                     ...state,
//                     count:state.count+1,
//                 }
//              case 'DECREMENT':
//                 return{
//                     ...state,
//                     count:state.count-1,
//                 }
//             default:
//                 return state;
//         }
//     }
//     const[state,dispatch] = useReducer(reducerFun,initialState);
//     return(
//         <>
//         <h2>{state.count}</h2>
//         <button onClick = {()=>dispatch({type:'INCREMENT'})}>INC</button>
//         <button onClick = {()=>dispatch({type:'DECREMENT'})}>DEC</button>
//         </>
//     )
// }
// export default UseReducer;

import { useEffect, useState, useReducer } from "react";
import axios from "axios";

function UseReducer() {
    const [data, setData] = useState([]);

    const fetchProducts = async (url) => {
        const { data } = await axios.get(url);
        // console.log(data);
        // console.log(data.products);
        setData(data.products);
    };

    useEffect(() => {
        const URL = "https://dummyjson.com/products";
        fetchProducts(URL);
    }, []);

    const initialState = {
        price : "",
        discount:"",
        rating:""
    }

    const filterReducer=(state,action)=>{

        switch(action.type){
            case 'PRICE':
                return{
                    ...state,
                    price:action.payload
                }
            case 'DISCOUNT':
                return{
                    ...state,
                    discount:action.payload
                }
            case 'RATING':
                return{
                    ...state,
                    rating:action.payload
                }
        }

    }



    const[{price,discount,rating},filterDispatcher] = useReducer(filterReducer,initialState);

    const filterByPrice = price?.length>0? data.filter(product => product.price <= price):data;
    const filterByDiscount = discount?.length>0? filterByPrice.filter(product => product.discountPercentage >= discount):filterByPrice;
    const filterByRating = rating?.length>0? filterByDiscount.filter(product => product.rating >= rating):filterByDiscount;


    return (
        <>
            <h1>Products</h1>

            <span>filters:</span>
            <input placeholder="set price" onChange = {(e) => {
                filterDispatcher({
                type:'PRICE',
                payload:e.target.value
                })
                }} />
            <input placeholder="set discount" onChange = {(e) => {
                filterDispatcher({
                type:'DISCOUNT',
                payload:e.target.value
                })
                }} />
            <input placeholder="set rating" onChange = {(e) => {
                filterDispatcher({
                type:'RATING',
                payload:e.target.value
                })
                }} />

            {filterByRating?.length > 0 &&
                filterByRating.map((product) => (
                <div key={product.id}>
                    <p>discount - {product.discountPercentage}</p>
                    <p>price - {product.price}</p>
                    <p>rating - {product.rating}</p>
                </div>
                ))}
        </>
    );
}

export default UseReducer;