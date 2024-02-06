import { useContext, useEffect, useState } from "react"
import VideoContextDispatch from "../context/VideoDispatchContext"
import useVideoDispatch from "../hook/VideoDispatch"

function Form({editablePerson})
{
  // const dispatch = useContext(VideoContextDispatch)
const dispatch = useVideoDispatch()

  let initailState = {
    
    "city": "Wonderland",
    "isStudent": true,
    "name" : '',
"age" : ''  }
  const [Formdata,setFormdata] = useState(initailState)


  function handleSubmit(e)
  {
    e.preventDefault()
    if(editablePerson)
    {
      dispatch({type:'UPDATE',payload:Formdata})

    }
    else{
      dispatch({type:'ADD',payload:Formdata})
    }
    
 
  setFormdata(initailState)

  }


    function handleChange(e)
    {
    //   console.log(e.target.value)

setFormdata({...Formdata,[e.target.name] : e.target.value})
    }


    useEffect(()=>
    {
      if(editablePerson)
      {
        setFormdata(editablePerson)
      }
    },[editablePerson])

    return(
        <>
        <form>
            <input type="text" name="name" placeholder="name" onChange={handleChange} value={Formdata.name}></input>
            <input type="text" name="age" placeholder="age"  onChange={handleChange} value={Formdata.age}></input>

            <button onClick={handleSubmit}> {editablePerson ? 'edit': 'Add Data from Form'}</button>
        </form>
        </>
    )
}
export default Form