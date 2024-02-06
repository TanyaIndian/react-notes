import { useEffect, useRef, useState } from "react"

function Form({addFormData,updatePerson,editablePerson})
{

  
  let initailState = {
    
    "city": "Wonderland",
    "isStudent": true,
    "name" : '',
"age" : ''  }
  const [Formdata,setFormdata] = useState(initailState)
  const inpRef = useRef(null)


  function handleSubmit(e)
  {
    e.preventDefault()
    if(editablePerson)
    {
      updatePerson(Formdata)
    }
    else{
      addFormData(Formdata);
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
      inpRef.current.focus()
    },[editablePerson])

    return(
        <>
        <form>
          {/* to interact with dom element we use  useRef ref is here like document.getEelmentByid */}
            <input type="text" ref={inpRef} name="name" placeholder="name" onChange={handleChange} value={Formdata.name}></input>
            <input type="text"  name="age" placeholder="age"  onChange={handleChange} value={Formdata.age}></input>

            <button onClick={handleSubmit}> {editablePerson ? 'edit': 'Add Data from Form'}</button>
        </form>
        </>
    )
}
export default Form