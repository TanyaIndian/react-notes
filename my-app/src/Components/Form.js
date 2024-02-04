import { useState } from "react"

function Form({addFormData})
{
  const [Formdata,setFormdata] = useState({
    
    "city": "Wonderland",
    "isStudent": true,
    "name" : '',
"age" : ''  })


  function handleSubmit(e)
  {
    e.preventDefault()
    
  addFormData(Formdata);
  setFormdata({
    
    "city": "Wonderland",
    "isStudent": true,
    "name" : '',
"age" : ''  })

  }


    function handleChange(e)
    {
    //   console.log(e.target.value)

setFormdata({...Formdata,[e.target.name] : e.target.value})
    }


    return(
        <>
        <form>
            <input type="text" name="name" placeholder="name" onChange={handleChange} value={Formdata.name}></input>
            <input type="text" name="age" placeholder="age"  onChange={handleChange} value={Formdata.age}></input>

            <button onClick={handleSubmit}>Add Data from Form</button>
        </form>
        </>
    )
}
export default Form