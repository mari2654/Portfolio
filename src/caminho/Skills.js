import React from "react"
import Ms from "../Components/assets/MS.png"
import {Link} from "react-router-dom"
import * as S from "../Components/style"
import Photo from "../Components/assets/progimg.jpg"


export default function Skills(){

    return(
        <S.SkillsBody>
            <S.SkillsHeader>
                 <img src={Ms} alt="logo" />
                 <ul>
                   <li><Link to="/">Início</Link></li>
                   <li><Link to="/sobre-mim">Sobre mim</Link></li>
                   <li><Link to="/habilidades">Habilidades</Link></li>
                   <li><Link to="/projetos">Projetos</Link></li>
                 </ul>
            </S.SkillsHeader>
            <S.SkillsMain>
            <div class="container-one">
            <img src={Photo} alt="photo"/>
               <h2>Minhas habilidades adquiridas em 2022 foram:</h2>
            </div>
            </S.SkillsMain>
        </S.SkillsBody>
    )
}