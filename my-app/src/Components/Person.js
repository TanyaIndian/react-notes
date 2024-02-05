import './Person.css'


function Person({name,age,city,isStudent,children,deletePerson,id,editPerson})
{

// conditional

    return (
        <>
        
            <div> 
                <button onClick={()=>editPerson(id)}>+</button>
                <button onClick={()=>deletePerson(id)}>X</button>
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