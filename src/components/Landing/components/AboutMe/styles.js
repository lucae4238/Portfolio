import styled from 'styled-components';


export const Container = styled.div`
width: 100vw;
height: 80vh;
background: red;
justify-content: center;
display: grid;
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
grid-template-areas:"img info" ;
/* background: orange; */
border: 1px solid white;
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

export const TextArea = styled.div`
grid-area: info
`;

export const ImageContainer = styled.div`
grid-area: img
`;