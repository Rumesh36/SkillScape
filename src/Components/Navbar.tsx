import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";


const Navbar:React.FC = () => {

  const [open,setOpen] = useState<boolean>(false)
  
  const toggleMenu =()=>{
    setOpen(!open);
  }

  const close=()=>setOpen(false);


  const navlinks =[
    {label:"Home",path:"/"},
    {label:"RoadMap",path:"/roadmap"},
    {label:"MyNotes",path:"/mynotes"},
     {label:"About",path:"/about"},
  ];

  return (
    <>
    
          <nav className=" bg-neutral-100 border-gray-200 fixed w-full z-50 shadow-lg font-serif">
            <div className="flex text-2xl font-bold  justify-between items-center py-3">
              <div className=" ml-5">
                <h1 className="font-extrabold text-gray-700 lg:ml-25 lg:text-3xl">Skill<span className="text-blue-500">Scape</span></h1>
              </div>
              <ul className="text-xl font-semibold flex mr-5 items-center gap-5 max-sm:hidden lg:mr-20">
                 {navlinks.map((link)=>(
                  <li
                  key={link.path}>
                  <Link
                     to={link.path}
                     className="hover:text-blue-500 transition-colors duration-200"
                  >
                    {link.label}
                    </Link>
                  </li>
                 ))}
              </ul>
              {/* hambar menu */}
              <div className="sm:hidden mr-5 text-blue-600 font-extrabold">
                 
              <button
              className="transition-all cursor-pointer"
               onClick={toggleMenu} aria-label="Toggle Menu">
                {open ? <IoClose size={32}/> : <CgMenuRightAlt size={32}/>}
              </button>
              </div>
            </div>
            {/* mobile menu */}
              <div className={`sm:hidden overflow-hidden transition-all ease-in-out duration-200 ${open ?"max-h-96" :"max-h-0 opacity-0"}`}>
                   <ul className="text-xl font-semibold flex  flex-col py-4  justify-center  items-center gap-5 ">
                   {navlinks.map((link)=>(
                      <li
                      onClick={close}
                       key={link.path}
                      className="hover:bg-white py-3 w-[50%] rounded-2xl  text-center">
                    <Link to={link.path}
                    className="hover:text-blue-500 transition-colors duration-200 ">
                    
                    {link.label}

                      </Link>
                      </li>

                   ))}
                   </ul>
              </div>
         

            
          </nav>

    </>
  )
}

export default Navbar