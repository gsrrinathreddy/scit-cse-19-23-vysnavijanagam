import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Certifications from './Pages/Certifications';
import Contactme from './Pages/Contactme';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Projects from './Pages/Projects';
import Qualification from './Pages/Qualificaton';
import Skills from './Pages/Skills';
import Workshops  from './Pages/Workshops';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
<Route path="/Aboutus"element={<Aboutus/>}/>
<Route path="/Certifications"element={<Certifications/>}/>
<Route path="/Contactme"element={<Contactme/>}/>
<Route path="/Experience"element={<Experience/>}/>
<Route path="/Hobbies"element={<Hobbies/>}/>
<Route path="/Projects"element={<Projects/>}/>
<Route path="/Qualification"element={<Qualification/>}/>
<Route path="/Skills"element={<Skills/>}/>
<Route path="/Workshops"element={<Workshops/>}/>
      </Routes>
    </div>
  );
}

export default App;
