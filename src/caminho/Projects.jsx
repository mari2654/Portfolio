import React from "react"
import Ms from "../Components/assets/MS.png"
import {Link} from "react-router-dom"
import * as S from "../Components/style/Projects"

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
                <div className="project">
                    <p>Em breve</p>
                    
                </div>

                <div class="project">
                    <p>Em breve</p>
                    
                </div>

                <div class="project">
                    <p>Em breve</p>
                    
                </div>
                
              </div>   
            </section>
            </S.ProjectsMain>
        </S.ProjectsBody>
    )
}