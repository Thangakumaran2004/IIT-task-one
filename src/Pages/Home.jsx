import React from "react";
import {Link} from "react-router-dom";


const Home = ()=>{
    let headingStyles = {
        textAlign: "center",
        fontSize: "3rem"
      };

    let linkStyles = {
      marginLeft : "auto",
      marginRight : "auto",
      width: "50%",
      listStyle :"none",
      textDecoration: "none",
      color: "black"
    }


    
      return (
        <>
        
         <header style={headingStyles}>TOPICS</header>
         <ul>
          <li style={linkStyles}><Link to="/tarotCardsReading" ><p style={linkStyles}>Tarot Cards Reading</p></Link></li>
          <li style={linkStyles}><Link to="/theFool" ><p style={linkStyles}>The Fool</p></Link></li>
          <li style={linkStyles}><Link to="/theMagician" ><p style={linkStyles}>The Magician</p></Link></li>
          <li style={linkStyles}><Link to="/theHighPriestess" ><p style={linkStyles}>The High Priestess</p></Link></li>
          <li style={linkStyles}><Link to="/theEmpress" ><p style={linkStyles}>The Empress</p></Link></li>
          <li style={linkStyles}><Link to="/theEmperor" ><p style={linkStyles}>The Emperor</p></Link></li>
          <li style={linkStyles}><Link to="/theHierophant" ><p style={linkStyles}>The Hierophant</p></Link></li>
          <li style={linkStyles}><Link to="/theLovers" ><p style={linkStyles}>The Lovers</p></Link></li>
          <li style={linkStyles}><Link to="/theChariot" ><p style={linkStyles}>The Chariot</p></Link></li>
          <li style={linkStyles}><Link to="/strength" ><p style={linkStyles}>Strength</p></Link></li>
          <li style={linkStyles}><Link to="/theHermit" ><p style={linkStyles}>The Hermit</p></Link></li>
          <li style={linkStyles}><Link to="/wheelOfFortune" ><p style={linkStyles}>Wheel of Fortune</p></Link></li>
          <li style={linkStyles}><Link to="/justice" ><p style={linkStyles}>Justice</p></Link></li>
          <li style={linkStyles}><Link to="/theHangedMan" ><p style={linkStyles}>The Hanged Man</p></Link></li>
          <li style={linkStyles}><Link to="/death" ><p style={linkStyles}>Death</p></Link></li>
          <li style={linkStyles}><Link to="/temperance" ><p style={linkStyles}>Temperance</p></Link></li>
          <li style={linkStyles}><Link to="/theDevil" ><p style={linkStyles}>The Devil</p></Link></li>
          <li style={linkStyles}><Link to="/theTower" ><p style={linkStyles}>The Tower</p></Link></li>
          <li style={linkStyles}><Link to="/theStar" ><p style={linkStyles}>The Star</p></Link></li>
          <li style={linkStyles}><Link to="/theMoon" ><p style={linkStyles}>The Moon</p></Link></li>
          <li style={linkStyles}><Link to="/theSun" ><p style={linkStyles}>The Sun</p></Link></li>
          <li style={linkStyles}><Link to="/judgement" ><p style={linkStyles}>Judgement</p></Link></li>
          <li style={linkStyles}><Link to="/theWorld" ><p style={linkStyles}>The World</p></Link></li>

          

         </ul>
        
        </>
      );
}

export default Home;