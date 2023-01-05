import styled from "styled-components"

export const AboutBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
margin:0;
padding:0;
box-sizing:border-box;
`

export const AboutHeader = styled.header`
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
export const AboutMain = styled.main`
display:flex;
justify-content:space-evenly;
align-items:center;
height:87%;
background:#1B2430;

img{
    width:80%;
    height:50vh;
    border-radius:20px;
}

h1{
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:50px;
    color:#816797;
    
}

.contain-one{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:60%; 
}

p{
    color:#816797;
    margin-left:5vw;
    width:350px;
}

.contain-two{
    margin-top:5em;
}

@media(max-width:900px){
    display:flex;
    flex-direction:column-reverse;
    height:900px;
    justify-content:space-evenly;

    .contain-two{
       margin-left:6em;
    }
}
`