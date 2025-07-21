import { Link } from 'react-router-dom'
import Climbpic from '../assets/Imgs/climblingman.webp'
import Footer from '../Components/Footer'


const Home = () => {

  const features =[
    {
    title: 'Interactive Roadmaps',
    icon: '🗺️',
    desc: 'Visual learning paths with real-time progress tracking.'
  },
   {
     title: 'Curated Resources',
     icon: '📚',
    desc: 'Handpicked guides, docs, and videos tailored for each topic.'
  },
  {
   title: 'Save Your Journey',
  icon: '💾',
  desc: 'Auto-saved checkpoints so you never lose progress.'
  }
  ];


  return (
    <> 
    
    <div className="bg-neutral-100  min-h-screen pt-7 px-4">
      {/* Title */}
      <div className="text-center font-serif mb-3">
        <h1 className=" font-extrabold text-gray-700 text-4xl">Skill<span className="text-blue-500">Scape</span></h1>
        <p className=" text-gray-600 font-semibold text-sm pt-1">A RoadMap to Mastery</p>
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
              <button className="bg-gradient-to-r from-blue-600 mt-4 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition duration-300 px-8 py-3 rounded-xl text-white font-bold text-lg shadow-md">
                🚀 Get Started
              </button>
            </Link>
       </div>
       
       </div>
       {/* features highlights */}
       <div className='grid md:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto mb-5'>
          {features.map((feature,index)=>(
              <div
              key={index}
              className='bg-white shadow-md p-5 rounded-xl hover:shadow-xl'
              >
                <div className='text-3xl'>{feature.icon}</div>  
                <h2 className='font-bold text-lg mt-2'>{feature.title}</h2>
                <p className='text-gray-600 text-sm mt-1'>{feature.desc}</p>
              </div>
          ))}
       </div>   
    </div>
    
    <Footer/>
    </>
  )
}

export default Home