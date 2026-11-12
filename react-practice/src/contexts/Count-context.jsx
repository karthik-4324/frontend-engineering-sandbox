import{ createContext,useState,useContext} from 'react';
const initialValue = {
    count:0
}
const CountContext = createContext(initialValue);

const CountProvider = ({children})=>{
    const[count, setCount] = useState(111);
    return(
        <CountContext value ={{count,setCount}}>
            {children}
        </CountContext>
    )
}
//consumer

const useCount = () => (useContext(CountContext))

export {useCount,CountProvider}