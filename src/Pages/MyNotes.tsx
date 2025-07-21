import { useEffect, useState } from "react";
import NotesForm from "../Components/NotesForm";
import { GrEdit } from "react-icons/gr";
import { FaSave } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

const Storagekey = "mynotes";

const MyNotes = () => {
  const [noteList, setNoteList] = useState<string[]>([]);
  const [editingindex, setEditingindex] = useState<number | null>(null);
  const [editedNote, setEditedNote] = useState<string>("");

  // to load on local storage..
  useEffect(() => {
    const storenotes = localStorage.getItem(Storagekey);
    if (storenotes) {
      setNoteList(JSON.parse(storenotes));
    }
  }, []);

  const addnotes = (newnotes: string) => {
    const updated = [...noteList, newnotes];
    setNoteList(updated);
    localStorage.setItem(Storagekey, JSON.stringify(updated));
  };
  // deleting notessss
  const deleteNotes = (index: number) => {
    const upadtedNotes = noteList.filter((__, i) => i !== index);
    setNoteList(upadtedNotes);
    localStorage.setItem(Storagekey, JSON.stringify(upadtedNotes));
  };

  // editing notes
  const startEditing = (index: number, currentNode: string) => {
    setEditedNote(currentNode);
    setEditingindex(index);
  };
  // saving edited note
  const saveeditednote=()=>{
    if(editingindex!==null){
      const updated=[...noteList]
      updated[editingindex]=editedNote
      setNoteList(updated)
      localStorage.setItem(Storagekey,JSON.stringify(updated))
      setEditingindex(null)
      setEditedNote("")
    }
  }
  // cancel editing
  const cancelEdit =()=>{
    setEditedNote("");
    setEditingindex(null);
  }
  // clear all notes

  const ClearallNotes=()=>{
   setNoteList([]);
    localStorage.removeItem(Storagekey)
  }

  return (
    <div className="pt-20 px-4 min-h-screen bg-blue-50 overflow-x-auto">
      <h1 className="flex justify-center items-center gap-2 mb-5 text-3xl font-bold font-serif text-blue-700 ">
        <span>My Notes App </span>
        <GrNotes/>

      </h1>

      <div className="max-w-xl mx-auto">
        <NotesForm onAddNote={addnotes} ClearAll={ClearallNotes}/>
      
      </div>

      {/* notes for displaying... */}
      <div className="mt-3">
        <h2 className="text-3xl font-semibold text-gray-600  text-center">
          Your Notes
        </h2>

        {noteList.length === 0 ? (
          <p className="text-center text-gray-500 font-serif ">No Notes yet..</p>
        ) : (
          <div className="flex flex-col items-center gap-4 px-4 max-h-[60vh] overflow-y-auto overflow-hidden">
            {noteList.map((note, index) => (
              <div
                key={index}
                className="bg-white w-full flex flex-col mt-2 justify-between max-w-lg lg:max-w-xl shadow-md rounded-lg p-4 break-words border border-gray-200 hover:shadow-lg transition duration-200"
              >
                {editingindex===index ?(
                 <>
                 <textarea 
                 className="w-full border rounded-md p-5 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows={3}
                  value={editedNote}
                  onChange={(e)=>setEditedNote(e.target.value)}
                 />
                 {/* save editing */}
                     <div className="flex justify-end gap-3">
                      <button 
                      onClick={saveeditednote}
                      className="bg-green-500 flex items-center gap-1 text-white px-2 py-1 rounded-md hover:bg-green-700 font-semibold">
                        <FaSave />
                        <span>Save</span>
                      </button>
                    
                     {/* cancel button */}               

                      <button
                      onClick={cancelEdit}
                       className="bg-red-500  text-white px-3 py-1 rounded-md hover:bg-red-600 font-semibold">Cancel</button>
                     </div>
                 </>
                ):(
                <>
                <p className="text-gray-700 break-words whitespace-pre-wrap mb-4">{note}</p>
                {/* buttons */}
                <div className="mr-3 flex justify-end gap-3">
                  {/* edit btn */}
                  <button
                    onClick={() => startEditing(index, note)}
                    className="bg-yellow-500 flex items-center gap-2 px-2 py-1 rounded-md font-bold text-white"
                  >
                  <GrEdit className="text-white" />
                  <span>Edit</span>
                  </button>

                  {/* delete button */}
                  <button
                    onClick={() => deleteNotes(index)}
                    className="bg-red-500  px-2 py-1 rounded-md font-bold text-white hover:bg-red-600"
                  >
                  <MdDelete size={20} />
                  
                  </button>
                </div>
                </>
                )}
              </div>
            ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default MyNotes;
