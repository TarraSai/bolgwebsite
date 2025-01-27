import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Dashboard from "./Pages/Dashboard";
import Header from "./components/Header";
import CustomFooter from "./components/MyFooter";
import PrivateRoute from "./components/PrivateRoute";

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
      <Route element={<PrivateRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
     
      
    </Routes>
    <CustomFooter/>
    </BrowserRouter>
  );
}

export default App;
