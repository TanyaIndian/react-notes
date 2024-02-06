import { useRef, useState } from "react";

function Counter(){
    console.log('render Counter')
    const [number, setNumber] = useState(0);
    let num = useRef(0);
    // let num = 0

    function handleClick(e){
        e.stopPropagation();
       
       setNumber(number=>number+1);
       setNumber(number=>number+1);
       setNumber(number=>number+1);
       num.current++
    // num++ // cannot access state while rerender the value will remain same have to use useRef, useRef value is not effected by rerednder
        
        console.log(num)
    }

    return(
        <>
        <h1 style={{color:'black'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;