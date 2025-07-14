import Card from "../Components/Card"
import Frontend from '../assets/Imgs/fe.webp'
import Backend from '../assets/Imgs/Backend.webp'
import Fullstack from '../assets/Imgs/fullstack.webp'


const RoadMap = () => {
  return (
    <div className="pt-20 bg-blue-50 pb-10">
               
        <h1 className="text-center text-2xl font-extrabold text-blue-700 hover:text-blue-900">RoadMap</h1>

      <h1 className="text-center my-5 text-2xl lg:text-4xl font-semibold text-gray-700">Choose Your Category</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-2xl mx-auto lg:max-w-5xl mt-3">
          <Card
            logo={Frontend}
            Title="Frontend Developer"
            description="Build user interface and web apps" 
            link={"/frontend"}           />

           <Card
            logo={Backend}
            Title="Backend Developer"
            description="Develop server-side logic and APIs" 
            link={"/backend"}           />

           <Card
            logo={Fullstack}
            Title="Full Stack Developer"
            description="Build end-to-end web Application" 
            link={"/fullstack"}           />
      </div>


    </div>
  )
}

export default RoadMap