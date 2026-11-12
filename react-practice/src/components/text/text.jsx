import {useCount} from '../../contexts/Count-context'

export const Text = () => {

    const{count} = useCount();
    return(
        <p>you clicked the increment - {count}</p>

    )

}
