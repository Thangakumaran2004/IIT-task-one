
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import React from 'react';
import Home from './Pages/Home';
import TarotCardsReading from './Components/TarotCardsReading';
import TheFool from './Components/TheFool';
import TheMagician from './Components/TheMagician';
import TheHighPriestess from './Components/TheHighPriestess';
import TheEmpress from './Components/TheEmpress';
import TheEmperor from './Components/TheEmperor';
import TheHierophant from './Components/TheHierophant';
import TheLovers from './Components/TheLovers';
import TheChariot from './Components/TheChariot';
import Strength from './Components/Strength';
import TheHermit from './Components/TheHermit';
import WheelOfFortune from './Components/WheelOfFortune';
import Justice from './Components/Justice';
import TheHangedMan from './Components/TheHangedMan';
import Death from './Components/Death';
import Temperance from './Components/Temperance';
import TheDevil from './Components/TheDevil';
import TheTower from './Components/TheTower';
import TheStar from './Components/TheStar';
import TheMoon from './Components/TheMoon';
import TheSun from './Components/TheSun';
import Judgement from './Components/Judgement';
import TheWorld from './Components/TheWorld';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tarotCardsReading" element={<TarotCardsReading/>}></Route>
        <Route path="/theFool" element={<TheFool/>}></Route>
        <Route path="/theMagician" element={<TheMagician></TheMagician>}></Route>
        <Route path="/theHighPriestess" element={<TheHighPriestess></TheHighPriestess>}></Route>
        <Route path="/theEmpress" element={<TheEmpress></TheEmpress>}></Route>
        <Route path='/theEmperor' element={<TheEmperor></TheEmperor>}></Route>
        <Route path='/theHierophant' element={<TheHierophant></TheHierophant>}></Route>
        <Route path='/theLovers' element={<TheLovers></TheLovers>}></Route>
        <Route path='/theChariot' element={<TheChariot></TheChariot>}></Route>
        <Route path='/strength' element={<Strength></Strength>}></Route>
        <Route path='/theHermit' element={<TheHermit></TheHermit>}></Route>
        <Route path='/wheelOfFortune' element={<WheelOfFortune></WheelOfFortune>}></Route>
        <Route path="/justice" element={<Justice></Justice>}></Route>
        <Route path="/theHangedMan" element={<TheHangedMan></TheHangedMan>}></Route>
        <Route path="/death" element={<Death></Death>}></Route>
        <Route path="/temperance" element={<Temperance></Temperance>}></Route>
        <Route path="/theDevil" element={<TheDevil></TheDevil>}></Route>
        <Route path="/theTower" element={<TheTower></TheTower>}></Route>
        <Route path="/theStar" element={<TheStar></TheStar>}></Route>
        <Route path="/theMoon" element={<TheMoon></TheMoon>}></Route>
        <Route path="/theSun" element={<TheSun></TheSun>}></Route>
        <Route path="/judgement" element={<Judgement></Judgement>}></Route>
        <Route path="/theWorld" element={<TheWorld></TheWorld>}></Route>
      </Routes>
    </BrowserRouter> 
    
    </>
  )
}

export default App;
