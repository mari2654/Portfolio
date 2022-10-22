import styled from "styled-components"
import ProfileImg from "./assets/perfil.png"



export const Body = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@900&family=Black+Ops+One&family=Montserrat:wght@100;500;700&family=Open+Sans:wght@400;600&family=Rajdhani:wght@300;400&family=Wire+One&display=swap');
background:#1B2430;
height:96vh;
max-width:100%;
`

export const Header = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:15vh;
border-bottom:1px solid #D6D5A8;
margin:0px;


img{
max-width:15vw; 
margin-left:-5vw;
}


ul{
display:flex;
justify-content:space-around;
list-style:none;
flex-wrap:wrap;
align-items:center;
font-size:17px;
padding-top:17px;
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



export const Main = styled.main`
    display:flex;
    justify-content: space-evenly;
    margin-top:2vw;
    flex-wrap:wrap;

.text{
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
    width:15vw;
    border-radius:100px;
    margin-top:10vw;
}

.box-two{
    display:flex;
    flex-direction:column;
    align-items:center; 
}

.cv{
    margin-bottom:2.5vw;
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
    color: black;
  }
  button:hover:after {
    width: 100%;
  }
  button:after {
    content: "";
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background:#51557E;
  }
`

export const AboutBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
`

export const AboutHeader = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:15vh;
border-bottom:1px solid #D6D5A8;
margin:0px;

img{
    max-width:15vw; 
    margin-left:-5vw;
    }
    
    
    ul{
    display:flex;
    justify-content:space-around;
    list-style:none;
    flex-wrap:wrap;
    align-items:center;
    font-size:17px;
    padding-top:17px;
    width:50%;
    }
    
    li a{text-decoration:none; color:#D6D5A8; transition:ease-in-out 0.3s}
    
    li a:hover{color:#816797;}
`
export const AboutMain = styled.main`
display:flex;
justify-content:space-evenly;
align-items:center;


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
    margin-left:9vw;
}

.contain-two{
    margin-top:5em;
}
`


export const ProjectsBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
`

export const ProjectsHeader = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:15vh;
border-bottom:1px solid #D6D5A8;
margin:0px;

    img{
    max-width:15vw; 
    margin-left:-5vw;
    }
    
    
    ul{
    display:flex;
    justify-content:space-around;
    list-style:none;
    flex-wrap:wrap;
    align-items:center;
    font-size:17px;
    padding-top:17px;
    width:50%;
    }
    
    li a{text-decoration:none; color:#D6D5A8; transition:ease-in-out 0.5s}
    
    li a:hover{color:#816797;}
`
export const ProjectsMain = styled.main`
display:flex;
flex-wrap:wrap;
height:100vh;


.div-projects{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
}

.projects{
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    width:70%;
    height:110vh;
    // background:#51557E;
    background:black;
    border-radius:10px;
}

.project{
    margin-top:1em;
    background:#1B2430;
    width:20vw;
    height:30vh;
    flex-wrap:wrap;
}

.project p{
    color:#D6D5A8;
    margin:auto;
}

button a{
    text-decoration:none;
    color:#D6D5A8;
}

button{
    background:transparent;
    margin-top:6em;
   width:20vw;
   height:10vh;
   border-top-radius:10px;
}

h1{
    margin-top:1em;
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:40px;
    color:#816797;
}


`

export const SkillsBody = styled.body`
background:#1B2430;
height:96vh;
max-width:100%;
`

export const SkillsHeader = styled.header`
display:flex;
justify-content: space-around;
width:100%;
height:15vh;
border-bottom:1px solid #D6D5A8;
margin:0px;

img{
    max-width:15vw; 
    margin-left:-5vw;
    }
    
    
    ul{
    display:flex;
    justify-content:space-around;
    list-style:none;
    flex-wrap:wrap;
    align-items:center;
    font-size:17px;
    padding-top:17px;
    width:50%;
    }
    
    li a{text-decoration:none; color:#D6D5A8; transition:ease-in-out 0.5s}
    
    li a:hover{color:#816797;}
`

export const SkillsMain = styled.main`
display:flex;
flex-wrap:wrap;

.container-one h2{
    margin-top:4em;
    font-family: 'Black Ops One', cursive;
    font-weight: 400;
    font-size:22px;
    color:#816797;
}

img{
    border-radius:30px;
    width:20%;
    margin-top:6em;
}

.container-one{
    display:flex;
    justify-content:space-around;

}


`


// main{

// }






// #contain-btn{
//     display:flex;
//     margin:0 auto;
//     background:transparent;
//     border:none;
// }




// .logos{
//     display:flex;
//     flex-direction:column;

// }

// .logos figure img {
// 	-webkit-filter: grayscale(0) blur(0);
// 	filter: grayscale(0) blur(0);
// 	-webkit-transition: .3s ease-in-out;
// 	transition: .3s ease-in-out;
// }
// .logos figure:hover img {
// 	-webkit-filter: grayscale(100%) blur(3px);
// 	filter: grayscale(100%) blur(3px);
// }


  













