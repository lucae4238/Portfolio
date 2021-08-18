import styled from 'styled-components';


export const Content = styled.div`
background: black;
min-height: 61vh;
display: grid;
height: max-content;
width: 80vw;
border: 1px solid black;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas:"img info" ;
border: 1px solid white;
align-content: center;
align-items: center;
align-self: center;
margin: 5rem;
min-width: fit-content;

@media screen and (max-width: 1200px){
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 1fr;
grid-template-areas: "info"
"img";
}
`;

export const Info = styled.div`
grid-area: info;
border: 1px solid white;
height: max-content;
align-items: center;
justify-content: center;
margin: 3rem;
`;

export const ContainerImg = styled.div`
grid-area: img;
justify-content: center;
/* background: green; */
`;
export const CustomImg = styled.img`
max-height: 30rem;
min-height: 25rem;
display:block;
margin:auto;

`;

export const SkillsDiv = styled.div`

border: 1px solid white;
width: 70vw;
min-width: 30rem;
display: flex;
align-self: center;
display: flex;
flex-direction: column;
height: max-content;
margin: 3rem;
`;
export const SkillsGrid = styled.div`
/* background: blue; */
border: 1px solid white;
height: max-content;
padding: 3rem;
display:flex;
flex-wrap: wrap;
justify-content: center;

/* grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr; */

`;

export const SkillItem = styled.div`
background: purple;
display: block;
width: 10rem;
height: 10rem;
margin: 0.5rem;
`;