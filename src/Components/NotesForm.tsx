import { useState } from "react"

type Nodelistprops={
    onAddNote:(notes:string)=>void;
    ClearAll:()=>void;
}




const NotesForm:React.FC<Nodelistprops> = ({onAddNote,ClearAll}) => {

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
              className="border rounded-lg p-3  max-w-xl w-xl h-30 md:h-35 resize-none shadow-sm max-sm:w-[86vw]"
              placeholder="Start your Notes here..."
              value={notes}
              onChange={handleChange}
            
            />
            </div>
            {/* button */}

            <div className="mt-1 flex gap-3">     
                 <button
                  type="submit"
                  className="bg-blue-500 py-3 px-4 rounded-lg font-bold text-white hover:to-purple-700 shadow-md transition duration-200">
                    Add Notes
                 </button>
                   {/* clear notes */}
               <button 
               onClick={ClearAll}
               className="bg-red-500 py-3 px-4 rounded-lg font-bold text-white hover:to-red-700 shadow-md transition duration-200">
                    Clear All
                    </button>
                   
            </div>
         </div>
    </form>
   
   
   </>
  )
}

export default NotesForm