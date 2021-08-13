import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 70vh;
background: purple;
display: grid;
margin-top: 60px;
margin-bottom: auto;
justify-content: center;
`;

export const Content = styled.div`
/* max-width: 80%; */
display: grid;
max-height: 90vh;
height: max-content;
width: 80vw;
border: 1px solid black;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas:"info img" ;
background: orange;
align-content: center;
align-items: center;
align-self: center;

@media screen and (max-width: 1200px){
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 1fr;
grid-template-areas: "info"
"img";
}
`;

export const ContainerImg = styled.div`
grid-area: img;
justify-content: center;
background: green;
`;

export const CustomImg = styled.img`
max-height: 30rem;
display:block;
margin:auto;

`;

export const Info = styled.div`
grid-area: info;
border: 1px solid black;
margin: 3rem; 
align-self: baseline;
height: max-content;
position: relative;
`;

