import{ useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
// function FocusRef(){
//     const inputRef = useRef();
//     const onFocusClick = () => {
//         inputRef.current.focus();
//     }

//     return(
//         <>
//         <input ref = {inputRef} placeholder="search .../" />
//         <button onClick = {onFocusClick}>focus to click</button>
//         </>
//     )
// }
// export default FocusRef;

function FocusRef(){

    const prevText = useRef("");
    const[search,setSearch] = useState("");
    const [previousSearch, setPreviousSearch] = useState("");

    const currentSearch = (e) => {

        setSearch(e.target.value);
    }
    useEffect(() => {
    prevText.current = search;
}, [search]);

    const onClickCount = () => {
        setPreviousSearch(prevText.current);
    }

    return(
        <>
            <input onChange = {currentSearch}placeholder="type something ..." />
            <button onClick = {onClickCount}>click to previous value</button>
            <p>Previous value: {previousSearch}</p>

        </>

    )

}
export default FocusRef;