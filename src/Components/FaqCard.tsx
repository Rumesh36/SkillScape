import { useState } from "react";

interface Faqtemplate{
    question:string;
    answer:React.ReactNode|string;
}


const FaqCard :React.FC<Faqtemplate> = ({question,answer}) => {

    const [open, setOpen] = useState<boolean>(false);

  const ToggleFaq =()=>{
      
    setOpen(!open);
  }

  return (
   <>
    
    <div className="p-4 mx-auto w-full max-w-4xl  ">
        <div className="cursor-pointer border border-gray-300 rounded-lg p-3 md:p-4 transition duration-200 hover:shadow-md"
         onClick={ToggleFaq}
        >
       
          <h1
           className=" text-md font-serif font-semibold text-gray-800 lg:text-2xl"
           >{question}</h1>
        </div>

          {open &&(
            <div className="mt-3 px-4 py-2 bg-gray-50 border-l-4 border-l-blue-400 rounded-md">
                <p className="text-sm lg:text-base text-gray-700 font-serif">{answer}</p>
            </div>
          )}
    </div>
   </>
  )
}

export default FaqCard