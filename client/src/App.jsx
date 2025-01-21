import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
