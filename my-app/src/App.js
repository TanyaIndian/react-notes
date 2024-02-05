import './App.css';
import Video from './Components/Video';
import data from './Components/data';
// import Person from './Components/Person'
import './Components/Person.css'
import Button from './Components/Button';
import { useState } from 'react';
import Form from './Components/Form';
import PersonList from './Components/PersonList';


function App() {
  const [Videodata,setVideodata] = useState(data)
  const [editablePerson, setEditablePerson] = useState(null)
  function deletePerson(id)
  {
  //  console.log(id)
  setVideodata(Videodata.filter(ele=>ele.id !== id))
  // this filter will create a copy of array videodata with modified data which id should not be present
  }

  function editPerson(id)
  {
    setEditablePerson(Videodata.find(ele=>ele.id===id))
  // console.log(editablePerson)
  }
  function updatePerson(Formdata)
  {
    const index = Videodata.findIndex(ele=>ele.id === Formdata.id)
    const newPerson = [...Videodata];
    newPerson.splice(index,1,Formdata)
    setVideodata(newPerson)
    setEditablePerson(null)
  }


   function addFormData(Formdata)
   //Formdata has been passed from form.js through props called lifting staye up pased from child to parent of form
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

    <div> <Form editablePerson = {editablePerson} updatePerson = {updatePerson} addFormData = {addFormData}></Form> </div>
<div className ='container'>
  
<PersonList Videodata = {Videodata} editPerson = {editPerson} deletePerson={deletePerson}></PersonList>
{/* example of sibling we transfer videodata to personlist which is updated with the help of Form and render here */}
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
