import React from "react"
import Ms from "../Components/assets/MS.png"
import {Link} from "react-router-dom"
import * as S from "../Components/style"

export default function Projects(){

    return(
        <S.ProjectsBody>
            <S.ProjectsHeader>
                 <img src={Ms} alt="logo" />
                 <ul>
                   <li><Link to="/">Início</Link></li>
                   <li><Link to="/sobre-mim">Sobre mim</Link></li>
                   <li><Link to="/habilidades">Habilidades</Link></li>
                   <li><Link to="/projetos">Projetos</Link></li>
                 </ul>
            </S.ProjectsHeader>
            <S.ProjectsMain>
            <section class="div-projects">
            <h1>Projetos desenvolvidos</h1>
              <div class="projects">
                <div class="project">
                    <p>ODS</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>Crespos</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>To-Do List</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>Harry Potter API</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>Dog Page</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>Calculadora</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>

                <div class="project">
                    <p>Cronômetro</p>
                    <button><a href="#" target="_blank">Visualizar</a></button>
                </div>
              </div>   
            </section>
            </S.ProjectsMain>
        </S.ProjectsBody>
    )
}