import styled from 'styled-components';
import { keyframes } from 'styled-components'

export const Container = styled.div`
width: 99vw;
/* min-height: 80vh; */
height: max-content;

/* background: purple; */
display: grid;
margin-top: 6vh;
margin-bottom: auto;
justify-content: center;
`;

export const Content = styled.div`
font-size: 30px;
/* max-width: 80%; */
display: grid;
margin-top: 6rem;
/* min-height: 90vh; */
min-width: fit-content;
height: max-content;
width: 80vw;
/* border: 1px solid black; */
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas:"info img" ;
/* background: orange; */
/* border: 1px solid white; */
align-content: center;
align-items: center;
align-self: center;
@media screen and (max-width: 1200px){
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 1fr;
grid-gap: 10vw;
grid-template-areas: "info"
"img";
width: 90vw;
font-size: 80px;
}

background: rgba( 95, 3, 103, 0.10 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const ContainerImg = styled.div`
grid-area: img;
justify-content: center;
/* background: green; */
`;

export const CustomImg = styled.img`
/* width: 60vw; */
width: 30rem;
display:block;
margin:auto;

@media screen and (max-width: 1200px){
width: 90vw;
}

`;

export const Info = styled.div`
grid-area: info;
/* border: 1px solid white; */
margin: 3rem; 
align-self: baseline;
height: max-content;
`;





export const rotate = keyframes`
        0% {
            content: "PERN Stack Developer"
        }
        25%{
            content: "Fullstack Developer";
        }
  
        50% {
            content: "Frontend Developer";
        }
  
        75% {
            content: "Developer";
        }
`;
export const DynamicText = styled.h3`
color: purple;
height: 3vh;
margin-left: -10px;
:before {
        content: "PERN Stack Developer";
        animation: ${rotate} infinite 8s;
        padding-left: 10px;
    }
`;