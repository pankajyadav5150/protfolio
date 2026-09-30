import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Connect from "../pages/Connect"
import Projects from "../pages/Projects"
import Resume from "../pages/Resume"
export default function Mainroutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/connect" element={<Connect/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </>
    )
 }