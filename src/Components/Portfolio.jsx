import React, {useState, useRef} from "react"
import * as S from "../Components/style"
import ProfileImg from "../Components/assets/perfil.png"
import {Link} from "react-router-dom"
import Moon from "./assets/moon.png"
import Sun from "./assets/sun.png" 
import Linkedin from "./assets/logolinkedin.png"
import Github from "./assets/logogith.png"
import Gmail from "./assets/logogmail.png"
import Ms from "./assets/MS.png"


export default function Portfolio(){

    const [status, setStatus] = useState(false)
    const refSection = useRef()
    const refButtonOne = useRef()
    const refButtonTwo = useRef()
    const refButtonThree = useRef()
    const refButtonFour = useRef()
 
    function Change(){
        setStatus(!status)
       if(status === false){
        refButtonOne.current.style.backgroundColor="#2F2F32"
        refButtonTwo.current.style.backgroundColor="#2F2F32"
        refButtonThree.current.style.backgroundColor="#2F2F32"
        refButtonFour.current.style.backgroundColor="#2F2F32"
        refSection.current.style.backgroundColor="#06062b"
  

       }else{
        refButtonOne.current.style.backgroundColor="#F1CE42"
        refButtonTwo.current.style.backgroundColor="#F1CE42"
        refButtonThree.current.style.backgroundColor="#F1CE42"
        refButtonFour.current.style.backgroundColor="#F1CE42"
        refSection.current.style.backgroundColor="#F1CE42"
       }


        
    }

    return(
        <S.Body ref={refSection} >
            {/* <button id="contain-btn" onClick={Change}> {status ? (<img src={Sun}/>) : (<img src={Moon}/>)} </button> */}
        <S.Header>
            <img src={Ms} alt="logo" />
            <ul>
                <li><Link to="/sobre-mim">Sobre mim</Link></li>
                <li><Link to="/habilidades">Habilidades</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
            </ul>
        </S.Header>

        <S.Main>
             <div class="perfil">
               <figure id="image">
                  <img  src={ProfileImg} alt="foto-perfil" />
               </figure>
             </div>
          
           <section className="box-one">
            <div class="texts">
               <h2 id="h2">Olá! Eu sou</h2>
               <h1 id="h1"> Mariana Santos</h1>
               <h2 id="other-h2">Desenvolvedora Front-End </h2>
            </div>

           <div className="box-two">
            
            <a href="#"><button className="cv">Linkedin</button></a>
            <a href="#"><button className="cv">Github</button></a>
            <a href="#"><button className="cv">Gmail</button></a>
            <a href="#"><button className="cv">Ver currículo</button></a>
           </div>
           </section>
            
            
        </S.Main>

        {/* <footer>
           <div class="logos">
           <figure>
           <a href="#" target="_blank"><img src={Linkedin} alt="logo-linkedin" id="linkedin" /> </a> 
           </figure>
           <figure>
               <a href="#" target="_blank"> <img src={Gmail} alt="logo-gmail" id="gmail" /> </a>
           </figure>
          <figure>
               <a href="#" target="_blank"> <img src={Github} alt="logo-github" id="github"/> </a>
          </figure>
         </div>
        
        </footer> */}

           
          

       </S.Body>
    )
}