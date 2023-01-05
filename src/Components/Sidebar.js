import React from "react"
import {slide as Menu} from "react-burger-menu"
import {Link} from "react-router-dom"
import * as S from "../Components/style"

export default props => {
    return(
        
       <S.Menu>
        <Link to="/sobre-mim" className="menu-item">
         Sobre mim
        </Link>
        
        <Link to="/habilidades" className="menu-item">
        Habilidades
       </Link>
      
      <Link to="/projetos" className="menu-item">
         Projetos
        </Link>
      </S.Menu>
    )
}