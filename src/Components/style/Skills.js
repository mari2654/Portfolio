import styled from "styled-components"

export const SkillsBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
margin:0;
padding:0;
box-sizing:border-box;
`

export const SkillsHeader = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:15vh;
border-bottom:1px solid #D6D5A8;
margin:0px;
flex-wrap:wrap;


img{
max-width:9vw; 
height:14vh;
margin-left:-5vw;
}


ul{
display:flex;
justify-content:space-around;
list-style:none;
flex-wrap:wrap;
align-items:center;
font-size:17px;

width:50%;
font-family: 'Open Sans', sans-serif;
}

li a{
    text-decoration:none; 
    color:#816797; 
    transition:ease-in-out 0.5s
}

li a:hover{
    color:#D6D5A8;
    font-size:20px;
}
`

export const SkillsMain = styled.main`
background:#1B2430;

.container-one h2{
  
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:22px;
    color:#816797;
}

.container-one{
    display:flex;
    align-items:center;
    margin-left:15em;
    margin-top:5em;
    width:60%;
}

.container-one img{
    width:15vw;
    border-radius:20px;
    margin-top:5em;
    margin-right:3em;
}

.box img{
   width:5vw;
}

.figure{
    justify-content:space-evenly;
}
}

@media screen(max-width:900px){
    #photo-skills{
        display:none;
    }
}
`