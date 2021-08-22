import styled from 'styled-components';
import { Header } from '../../../../styled-components';

export const CenteredHeader = styled(Header)`
align-self: center;
`;

export const Container = styled.div`
/* width: 100vw; */
height: max-content;
/* min-height: 80vh; */
min-width: fit-content;
/* background: purple; */
justify-content: center;
display: grid;
margin-bottom: 5rem;
`;


export const Content = styled.div`
/* max-width: 80%; */
display: grid;
min-width: fit-content;
height: max-content;
width: 80vw;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr;
grid-template-areas:"img info" ;
/* background: orange; */
align-content: center;
align-items: center;
align-self: center;
padding: 3rem;

@media screen and (max-width: 1200px){
grid-template-columns: 1fr;
grid-template-rows: 0.5fr 1fr;
grid-template-areas: "info"
"img";
}
`;

export const TextArea = styled.div`
grid-area: info;
margin: 3rem;
border: 1px solid white;
`;

export const ImageContainer = styled.div`
grid-area: img
`;
export const CustomImg = styled.img`
height: 25rem;
`;