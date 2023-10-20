// import logo from './logo.svg';
// import logo from './Picsa';
import React from "react";
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';




function App() {
  const [mode, SetMode] = useState("light");
  ////to check the it is dark  is enable or not;
  return (
    <>
      <Navbar Home="Home" About="About us" title="TextUtiles" />
      {/* <Navbar /> */}

      <div className="container my-3">
        <Textform heading={"Enter Text to Analyse"} />


        <About />
      </div>
    </>
  );
}
export default App;
