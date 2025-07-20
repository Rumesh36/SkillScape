import { useEffect, useState } from "react"
import NotesForm from "../Components/NotesForm"


const Storagekey="mynotes";

const MyNotes = () => {

  const [noteList, setNoteList] = useState<string[]>([]);

  // to load on local storage..
  useEffect(()=>{
    const storenotes = localStorage.getItem(Storagekey);
    if(storenotes){
      setNoteList(JSON.parse(storenotes));
    }
  },[]);

  const addnotes=(newnotes:string)=>{
    const updated = [...noteList,newnotes];
    setNoteList(updated);
    localStorage.setItem(Storagekey,JSON.stringify(updated))

  }
// deleting notessss
const deleteNotes =(index:number)=>{
  const upadtedNotes = noteList.filter((__,i)=>i!==index);
  setNoteList(upadtedNotes);
  localStorage.setItem(Storagekey,JSON.stringify(upadtedNotes))
}

  return (
    <div className="pt-20 px-4 min-h-screen bg-blue-50 overflow-x-auto">

      <h1 className="text-center mb-5 text-3xl font-bold  text-gray-600">My Notes Page</h1>

    <div className="max-w-xl mx-auto">
     <NotesForm onAddNote={addnotes}/>
     </div>

     {/* notes for displaying... */}
     <div className="mt-8">
       <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Your Notes</h2>
      
      
      {noteList.length===0 ?(
        <p className="text-center text-gray-500">No Notes yet..</p>
     ):
      
    (
       <div className="flex flex-col items-center gap-4 px-4 max-h-[60vh] overflow-y-auto overflow-hidden">        
        {noteList.map((note,index)=>(
        <div key={index}
        className="bg-white w-full flex flex-col justify-between max-w-lg lg:max-w-xl shadow-md rounded-lg p-4 break-words border border-gray-200 hover:shadow-lg transition duration-200"
              >
          <h1>{note}</h1>
          
          {/* buttons */}
        <div className="mr-3">
          {/* edit btn */}
           <button
           
           className="bg-green-600 px-3 py-1 rounded-md font-bold text-white">Edit</button>
        
         {/* delete button */}
        <button
         onClick={()=>deleteNotes(index)}
         className="bg-red-500 px-2 py-1 rounded-md font-bold text-white hover:bg-red-600">Delete</button>

      </div>
        </div>
      ))}
    
    </div>

    )}
    </div>
     </div>
  )
}

export default MyNotes