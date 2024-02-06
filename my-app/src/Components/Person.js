import { useContext } from 'react'
import './Person.css'
import ThemeContext from '../context/ThemeContext'

function Person({name,age,city,isStudent,children,id,editPerson,dispatch})
{

    const theme = useContext(ThemeContext)

// conditional

    return (
        <>
        
            <div> 
                <button className={theme} onClick={()=>editPerson(id)}>+</button>
                <button className= {theme} onClick={()=>dispatch({type:'DELETE',payload:id})}>X</button>
                <h1>{name}</h1>
                <p> {age} </p>
                <h3> {city} </h3>
                {isStudent ? <b>yes</b> : <i>No</i>}
                <div>{children}</div>
                 </div>
             
        </>
    )
}
export default Person