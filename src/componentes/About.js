import { BsLinkedin ,BsPersonFill } from "react-icons/bs";
import React from "react";
import '../hojas-de-estilo/About.css';


const About = () => {
   
    return (
        <div className="caja-contactato">
            
            <div className="lista-contacto">
                
                <a className="logo-lik" href="https://www.linkedin.com/in/alexander-arvelo-378724148/"><BsLinkedin className="logo" />   </a>
               
                <BsPersonFill className="contacto" onClick={()=>{
                    alert(" Email :alexsilverr2390@gamil.com  ")
                    
                }} /> 
            </div>
        </div>
     );
}

export default About;