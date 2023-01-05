import styled from "styled-components"
import ProfileImg from "../assets/perfil.png"



export const Body = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@900&family=Black+Ops+One&family=Montserrat:wght@100;500;700&family=Open+Sans:wght@400;600&family=Rajdhani:wght@300;400&family=Wire+One&display=swap');
background:#1B2430;
height:100vh;
max-width:100%;
margin:0;
padding:0;
box-sizing:border-box;

@media screen(max-width:720px){
    heigth:100vh;
}
`

export const Header = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:5em;
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
    
}
`



export const Main = styled.main`
    display:flex;
    justify-content: space-evenly;
    margin-top:2em;
    flex-wrap:wrap;
    height:100%;
    background:#1B2430;

.box-one{
    background:#1B2430;
}

.texts{
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    
}
h1{
    color:#D6D5A8;
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:40px;
    text-decoration-line:underline;
    text-decoration-color:#D6D5A8;
    margin-bottom:-1.5vw;
}

#h2{
    color:#D6D5A8;
    font-family: 'Black Ops One', cursive;
    font-size:20px;
    margin-bottom:-2vw;
}
#other-h2{
    color:#816797;
    font-family: 'Wire One', sans-serif;
    font-weight:300;    
    font-size:30px;
    margin-left:5.5vw;
}
.perfil img{
    min-width:15vw;
    border-radius:150px;
    margin-top:10vw;
}

.box-two{
    display:flex;
    flex-direction:column;
    align-items:center; 
    height:50vh;
}

.contatos{
    margin-bottom:2.5vw;
}

.contatos a{
    text-decoration:none;
    color:#51557E;
}

button {
    min-width: 130px;
    height: 40px;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: transparent;
    overflow: hidden;
    border: 2px solid #D6D5A8;
    color: #D6D5A8;
  }
  button:hover {
    text-color:#1B2430;
  }
  button:hover:after {
    width: 100%;
  }

    a:hover{color:#1B2430;}

  button:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background:#D6D5A8;
  }

  @media(max-width:720px){
  height:100vh;
    .box-one{
        background:#1B2430;
        width:98vw;
    }
    .perfil img{
      width:40vw;
    }
    .texts{
        margin-left:5em;
        margin-top:3em;
    }

    .box-two{
        margin-top:3em;
    }

  }
`