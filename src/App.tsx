import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AppLayout from "./Layouts/AppLayout"
import Frontend from "./Pages/Frontend"
import About from "./Pages/About"
import Backend from "./Pages/Backend"
import FullStack from "./Pages/FullStack"
import RoadMap from "./Pages/RoadMap"

function App() {


  return (
    <>
         
         <BrowserRouter>
          
             <Routes>
                      <Route path="/" element={<Home/>}/>
                      
                      {/* applayout */}
                      <Route element={<AppLayout/>}>
                            <Route path="/frontend" element={<Frontend/>}/>
                            <Route path="/roadmap" element={<RoadMap/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/backend" element={<Backend/>}/>
                            <Route path="/fullstack" element={<FullStack/>}/>
                            
                      </Route>
             </Routes>
         
         
         </BrowserRouter>

    </>
  )
}

export default App
