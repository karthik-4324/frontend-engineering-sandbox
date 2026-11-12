import{useState} from 'react';
const allBrands = [
    {id : "1", brandName : "puma"},
    {id : "2", brandName : "nike"},
    {id : "3", brandName : "adidas"},
    {id : "4", brandName : "reebok"}
]

function AddToCart(){

    const[selectedBrand,setselectedBrand] = useState([])
    const onAddCartClick = (id)=>{
        const selectedItem = allBrands.find(item => item.id === id);
        setselectedBrand([...selectedBrand,selectedItem]);
    }

    const onRemoveItem = (id) => {
        const filteredItems = selectedBrand.filter(item => item.id !== id);
        setselectedBrand(filteredItems);
    }

    return(
        <>
        <h2>Add brand to your Cart</h2>
        {
            allBrands.map(brand => (
                <div key = {brand.id}>
                    <span>{brand.brandName}</span>
                    <button onClick = {()=>{onAddCartClick(brand.id)}}>Add to Cart</button>
                </div>
            ))
        }
        <h2> your cart</h2>
        {
            selectedBrand.map(brand => (
                <div key = {brand.id}>
                    <span>{brand.brandName}</span>
                    <button onClick = {()=>{onRemoveItem(brand.id)}}>remove</button>
                </div>
            ))
        }
        </>
    )
}
export default AddToCart;