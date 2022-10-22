import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom" 
import Portfolio from "../Portfolio"
import About from "../../caminho/Aboutme"
import Projects from "../../caminho/Projects"
import Skills from "../../caminho/Skills"


export default function Rotas(){

   return(
    <BrowserRouter>

    

        <Routes>
            <Route path="/" element={<Portfolio/>} />
            <Route path="/habilidades" element={<Skills/>} />
            <Route path="/sobre-mim" id="sobre-mim" element={<About/>} />
            <Route path="/projetos" element={<Projects/>} />
        </Routes>
    </BrowserRouter>
   )
}