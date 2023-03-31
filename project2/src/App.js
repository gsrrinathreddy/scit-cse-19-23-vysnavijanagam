import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
import Qualification from './Pages/Qualificaton';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
<Route path="/Aboutus"element={<Aboutus/>}/>
<Route path="/Experience"element={<Experience/>}/>
<Route path="/Hobbies"element={<Hobbies/>}/>
<Route path="/Qualification"element={<Qualification/>}/>
<Route path="/Skills"element={<Skills/>}/>
      </Routes>
    </div>
  );
}

export default App;
