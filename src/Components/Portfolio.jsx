import React, {useState, useRef} from "react"
import * as S from "../Components/style/Portfolio"
import ProfileImg from "../Components/assets/perfil.png"
import {Link} from "react-router-dom"
import Moon from "./assets/moon.png"
import Sun from "./assets/sun.png" 
import Linkedin from "./assets/logolinkedin.png"
import Github from "./assets/logogith.png"
import Gmail from "./assets/logogmail.png"
import Ms from "./assets/MS.png"
import Cv from "./assets/curriculo.pdf"
// import Menu from "./Sidebar.js"

export default function Portfolio(){

    return(
        <S.Body >
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
            
            <button className="contatos"><a href="https://www.linkedin.com/in/tech-mariana-santos/" target="_blank">Linkedin</a></button>
            <button className="contatos"><a href="https://github.com/mari2654" target="_blank">Github</a></button>
            <button className="contatos"><a href="https://api.whatsapp.com/send?phone=5521970814637" target="_blank">Whatsapp</a></button>
            <button className="contatos"><a href={Cv} target="_blank">Ver currículo</a></button>
           </div>
           </section>
            
            
        </S.Main>  
       </S.Body>
    )
}