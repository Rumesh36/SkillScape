import { Link } from 'react-router-dom'
import Climbpic from '../assets/Imgs/climblingman.webp'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <> 
    
    <div className="bg-neutral-100  min-h-screen pt-7 px-4">
      {/* Title */}
      <div className="text-center font-serif mb-6">
        <h1 className=" font-extrabold text-gray-700 text-4xl">Skill<span className="text-blue-500">Scape</span></h1>
        <p className="mt-2 text-gray-600 font-semibold text-md">A RoadMap to Mastery</p>
      </div>

        {/* main section  */}
      <div className="md:flex items-center justify-center gap-10 p-6 rounded-xl shadow-lg bg-white max-w-6xl mx-auto ">
        {/* image */}
        <div className='flex justify-center md:justify-start'>
          <img 
           className='w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain rounded-lg'
            src={Climbpic}  />
        </div>

       {/* text content */}
        <div className='text-center md:text-left mt-6 md:mt-0 max-w-xl'>
       <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">Master Your Career Path With Guided Roadmaps</h1>
       <p className="text-gray-600 mt-3">"Learn smarter with us — visual, guided, and unforgettable." </p>
       {/* navigating to roadmap */}
       <Link to="/roadmap">
       <button className="bg-blue-600 hover:bg-purple-600 transition duration-200 px-6 py-3 rounded-md mt-5 text-white font-semibold">Get Started</button>
       </Link>
       </div>
       
       </div>

       {/* <div>
          <h1>   BEST WAY TO LEARN </h1>
            <ul>
              <li>PLAN</li>

            </ul>
            
       </div>
         */}

    </div>
    
    <Footer/>
    </>
  )
}

export default Home