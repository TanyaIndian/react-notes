import Person from "./Person"
import Button from "./Button"
import { useContext, useEffect, useState } from "react"
import VideoDBContext from "../context/VideDBContext"
import useVideoDB from "../hook/VideoDB"
import axios from 'axios'
import useVideoDispatch from "../hook/VideoDispatch"

function PersonList({deletePerson,editPerson,})
{

    // const Videodata = useContext(VideoDBContext)
    // useVideoDB is a customhook used to return the same above line
    const Videodata = useVideoDB()

    const dispacth = useVideoDispatch()
    // https://my.api.mockaroo.com/fake.json?key=28d94670
const URL =     'https://my.api.mockaroo.com/fake.json?key=28d94670'
// const [Videodata,setVideodata] = useState([])

async function handleData ()
{
    const res = await axios.get(URL);
    console.log(res.data)
    // setVideodata(res.data) // functionality is not working due to UseReducer need to pass to dispacth
    dispacth({type:'LOAD',payload : res.data})

}

useEffect(()=>
{
    handleData();
},[dispacth])



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