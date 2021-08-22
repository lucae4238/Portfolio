import styled from 'styled-components';
import { Header } from '../../../../styled-components';

export const CenteredHeader = styled(Header)`
align-self: center;
margin-top: 10rem;
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
margin-top: -65px;
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
background: rgba( 95, 3, 103, 0.10 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding: 1rem;
`;

export const ImageContainer = styled.div`
grid-area: img
`;
export const CustomImg = styled.img`
height: 25rem;
`;

export const ContactDiv = styled.div`
display: flex;
margin: 2rem;
align-self: center;
flex-direction: column;
text-align:center;
`;

export const LogosDiv = styled.div`
display: flex;
`;