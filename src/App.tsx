import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import AppLayout from "./Layouts/AppLayout"
import Frontend from "./Pages/Frontend"
import About from "./Pages/About"
import Backend from "./Pages/Backend"
import FullStack from "./Pages/FullStack"
import RoadMap from "./Pages/RoadMap"
import MyNotes from "./Pages/MyNotes"
import ErrorPage from "./Pages/ErrorPage"

function App() {


  return (
    <>
         
         <BrowserRouter>
          
             <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="*" element={<ErrorPage/>}/>
                      
                      {/* applayout */}
                      <Route element={<AppLayout/>}>
                            <Route path="/frontend" element={<Frontend/>}/>
                            <Route path="/roadmap" element={<RoadMap/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/backend" element={<Backend/>}/>
                            <Route path="/fullstack" element={<FullStack/>}/>
                            <Route path="/mynotes" element={<MyNotes/>}/>
                            
                      </Route>
             </Routes>
         
         
         </BrowserRouter>

    </>
  )
}

export default App
