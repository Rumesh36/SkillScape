import { Link } from "react-router-dom";

interface CardProps{
    logo:string;
    Title:string;
    description:string;
    link:string
}


const Card:React.FC <CardProps>= ({logo,Title,description,link}) => {
  return (
    <>
           <div className="bg-neutral-300 text-center shadow-lg rounded-xl overflow-hidden transform hover:scale-105 duration-200 pb-5 mx-auto " >
            
                <div className="bg-white p-4 ">
                    <img src={logo} alt={Title}
                      className="mx-auto object-contain w-75 h-55 "
                    />
                </div>
                <div className="p-6 bg-neutral-300">
                    <h1 className="text-2xl font-bold text-gray-700 mb-2">{Title}</h1>
                    <p className="text-gray-500 text-md mb-4">{description}</p>
                    <Link to={link}>
                    <button className="bg-blue-500 py-3 px-5 rounded-lg text-center text-white font-extrabold hover:bg-blue-600 transition-colors">
                        Get started
                    </button>
                    </Link>
                </div>

           </div>



  
   </>
  )
}

export default Card