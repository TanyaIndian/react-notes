import './App.css';
import Video from './Components/Video';
import data from './Components/data';
import Person from './Components/Person'
import './Components/Person.css'
import Button from './Components/Button';
import { useState } from 'react';
import Form from './Components/Form';


function App() {
  const [Videodata,setVideodata] = useState(data)

   function addFormData(Formdata)
   {
     setVideodata([...Videodata,{...Formdata,id:Videodata.length+1}])
   }
  return (
    <div className="App">
      
  <div>exaple of props</div>  

<Video text2 = "Nodejs" text1 = "React js"></Video>
<Video text2 = "Html" text1 = "Css"></Video>

<div>conditional rendering</div>
<div>  <button onClick={()=>{setVideodata([...Videodata,{
      "id": Videodata.length,
      "name": "Rovert",
      "age": 22,
      "city": "Codeburg",
      "isStudent": true
    }])}}>Add more data </button>  </div>

    <div> <Form addFormData = {addFormData}></Form> </div>
<div className ='container'>
  
{Videodata.map(person=><Person  age = {person.age} name = {person.name} city = {person.city } isStudent = {person.isStudent} key={person.id}>
  <Button onPlay = {()=>console.log("Played",person.name)} onPaused = {()=>console.log('paused',person.name)}>{person.name}</Button>
  {/* button is children of person */}
  
   </Person>)
}
</div>

<div> <h1> Events  </h1>
{/* custom event omSmash we can pas function with props */}
<Button onPlay = {()=>console.log("Played")} onPaused = {()=>console.log('paused')}>PLAY</Button>
{/* we want to do different work with same button so commenting pause button */}
{/* <Button onSmash = {()=>console.log("Paused")}>PAUSE</Button> */}
 </div>

    


    </div>
  );
}

export default App;
