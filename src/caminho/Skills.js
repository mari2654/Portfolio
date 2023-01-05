import React from "react"
import Ms from "../Components/assets/MS.png"
import {Link} from "react-router-dom"
import * as S from "../Components/style/Skills"
import Photo from "../Components/assets/progimg.jpg"
import HtmlLogo from "../Components/assets/html-5.png"
import CssLogo from "../Components/assets/css-3.png"
import JsLogo from "../Components/assets/java-script.png"
import ReactLogo from "../Components/assets/react.png"



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
                        <img src={Photo} id="photo-skills" alt="photo"/>
                        <div class="box">
                        <h2>Minhas habilidades adquiridas em 2022 foram:</h2>
                        <figure>
                        <img src={HtmlLogo} alt="logo-html"/>
                        <img src={CssLogo} alt="logo-css"/>
                        <img src={JsLogo} alt="logo-js"/>
                        <img src={ReactLogo} alt="logo-react.js"/>
                        </figure>
                        </div>
                        
                  </div>
                </S.SkillsMain>
        </S.SkillsBody>
    )
}