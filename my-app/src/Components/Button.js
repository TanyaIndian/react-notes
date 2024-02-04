import { useState } from "react"

function Button({children, onPlay,onPaused})
{
    // let value = true;
const [value,setValue] = useState(true)
    function handleChange(e)
    {
    //   e.stopPropagation
        // stop event bubbling
        if(value)
        {
            onPlay()
        }
        else 
        {
            onPaused()
        
    }
    setValue(!value)
}

    return (
        <>
        {/* component is not getting updated on even if the value is changed to false when play button is clicked but working fine in console */}
        <button onClick={()=>handleChange()}>{children}{value ? '<' : '||'}</button>  

        {/* <button onClick={()=>handleChange()}>{children}</button> */}

        </>
    )
}
export default Button