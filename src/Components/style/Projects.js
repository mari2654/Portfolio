import styled from 'styled-components'

export const ProjectsBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
margin:0;
padding:0;
box-sizing:border-box;
`

export const ProjectsHeader = styled.header`
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
export const ProjectsMain = styled.main`
display:flex;

height:85%;
background:#1B2430;
width:100%;


.div-projects{
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    height:100%;
}

.projects{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:70%;
    height:50%;
    background:black;
    border-radius:10px;
    
}

.project{
    margin-top:1em;
    background:#1B2430;
    width:20vw;
    height:30vh;
    border-radius:10px;
}

.project p{
    color:#51557E;
    font-family: 'Open Sans', sans-serif;
    font-size:90%;
    margin:0 auto;
}


h1{
    margin-top:1em;
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:4vw;
    color:#816797;
}


`