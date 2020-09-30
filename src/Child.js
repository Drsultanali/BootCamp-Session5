import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext)
    console.log(counterValue)
    return (
        <div>
            <h2> We are learning Context Api and passing data directly from Root to Grand child
                <br /> This is the first child from Sultan Mubarak Ali 
            </h2>
    <h3>Counter Value is : {counterValue}</h3>
    <button onClick = {()=> {counterValue[1](++counterValue[0])}}>
        Increament
        </button>
        </div>
    )
}
export default Child;