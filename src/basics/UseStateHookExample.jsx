import { useState } from "react";

function UseStateHookExample(){
const [counter,setCounter] = useState(4);
const handleClick=()=>{
    const v = counter+1;
    setCounter(v);
    
};
    return (
   <>    <h1>useState example</h1>
    <div>counter value   : {counter}</div>
    <button type="submit" onClick={handleClick}>increase count</button>
    </>

);
}

export default UseStateHookExample;