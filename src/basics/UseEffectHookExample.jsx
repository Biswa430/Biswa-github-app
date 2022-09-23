import {useEffect,useState} from 'react';

function UseEffectHookExample() {
    const [counter,setCounter] = useState(1);
    useEffect(() =>{
        const newValue=counter+50;
        setCounter(newValue);
    },[])

    const handleClick=()=>{
        const v = counter+1;
        setCounter(v);
    };

  return (
    <>
    <h2>useEffect</h2>
    <div>the value :{counter}</div>
    <button type="submit" onClick={handleClick}>increase count</button>
    </>

  ) ;
  
  }

  export default UseEffectHookExample;

