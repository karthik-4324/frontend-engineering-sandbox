// import App from '../../App.jsx'
// import {useCount} from '../../contexts/Count-context.jsx'
import {Text} from '../text/text.jsx'


export const Button = ({onButtonClick}) => {

        // const [onButtonClick] = useCount();

        return (
            <>
                <button onClick = {onButtonClick}>click to increment</button>
                <Text />
            </>

        )
}