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
         </ul>
        
        </>
      );
}

export default Home;