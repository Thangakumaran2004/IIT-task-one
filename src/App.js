
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import TarotCardsReading from './Components/TarotCardsReading';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tarotCardsReading" element={<TarotCardsReading/>}></Route>
      </Routes>
    </BrowserRouter> 
    
    </>
  )
}

export default App;
