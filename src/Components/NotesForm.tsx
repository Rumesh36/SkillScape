import { useState } from "react"

type Nodelistprops={
    onAddNote:(notes:string)=>void;
}


const NotesForm:React.FC<Nodelistprops> = ({onAddNote}) => {

    const [notes, setNotes] = useState<string>('');
    console.log(notes);
    

    const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
         setNotes(e.target.value);
    }
    
    const handlesubmit =(e:React.FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          if(notes.trim()=="") return;
          onAddNote(notes);
          setNotes("");

    }

  return (
   <>
    
    <form onSubmit={handlesubmit}>
         
         <div className="flex justify-center items-center flex-col gap-4">
            <div className="">
            <textarea 
              className="border rounded-lg p-3 w-full max-w-lg h-32 resize-none shadow-sm"
              placeholder="Start your Notes here..."
              value={notes}
              onChange={handleChange}
            
            />
            </div>
            {/* button */}

            <div className="mt-5">     
                 <button
                  type="submit"
                  className="bg-blue-500 py-3 px-4 rounded-lg font-bold text-white hover:to-purple-700 shadow-md transition duration-200">
                    Add Notes
                 </button>
                   
            </div>
         </div>
         

    </form>
   
   
   </>
  )
}

export default NotesForm