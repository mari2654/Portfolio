import react from "react"
import {Link} from "react-router-dom"
import * as S from "../Components/style/Aboutme"
import Ms from "../Components/assets/MS.png"
import File from "../Components/assets/codeimg.png"

export default function Aboutme(){

    return(
        <S.AboutBody>
           <S.AboutHeader>
              <img src={Ms} alt="logo" />
                 <ul>
                   <li><Link to="/">Início</Link></li>
                   <li><Link to="/sobre-mim">Sobre mim</Link></li>
                   <li><Link to="/habilidades">Habilidades</Link></li>
                   <li><Link to="/projetos">Projetos</Link></li>
                 </ul>
           </S.AboutHeader>
           <S.AboutMain>
              <div class="contain-one">
                 <h1>Sobre mim</h1>
                 <p>Terminei o ensino médio em 2021 e entrei no curso de Desenvolvimento Front-end do Programa Vai na Web em 2022. Cursei um período de matemática na Universidade Federal Fluminense, mas não combinava com o meu perfil e meus objetivos. Saí e decidi focar nos estudos na área do Front-end.</p>
              </div>
              <div class="contain-two">
                 <img src={File} alt="foto-codigo"/>
              </div>   
           </S.AboutMain>
        </S.AboutBody>
    )
}