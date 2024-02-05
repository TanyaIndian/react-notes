import Person from "./Person"
import Button from "./Button"

function PersonList({Videodata,deletePerson,editPerson})
{


    return(
        <>
        {Videodata.map(person=><Person editPerson = {editPerson}  deletePerson={deletePerson} id = {person.id} age = {person.age} name = {person.name} city = {person.city } isStudent = {person.isStudent} key={person.id}>
  <Button onPlay = {()=>console.log("Played",person.name)} onPaused = {()=>console.log('paused',person.name)}>{person.name}</Button>
  {/* button is children of person */}
  
   </Person>)
}
        </>
    )
}

export default PersonList