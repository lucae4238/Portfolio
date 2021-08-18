import styled from "styled-components";

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