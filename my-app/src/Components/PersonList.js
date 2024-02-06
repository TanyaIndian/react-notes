import Person from "./Person"
import Button from "./Button"
import { useContext } from "react"
import VideoDBContext from "../context/VideDBContext"
import useVideoDB from "../hook/VideoDB"

function PersonList({deletePerson,editPerson,})
{

    // const Videodata = useContext(VideoDBContext)
    // useVideoDB is a customhook used to return the same above line
    const Videodata = useVideoDB()

    return(
        <>
        {Videodata.map(person=><Person  editPerson = {editPerson}  id = {person.id} age = {person.age} name = {person.name} city = {person.city } isStudent = {person.isStudent} key={person.id}>
  <Button onPlay = {()=>console.log("Played",person.name)} onPaused = {()=>console.log('paused',person.name)}>{person.name}</Button>
  {/* button is children of person */}
  
   </Person>)
}
        </>
    )
}

export default PersonList