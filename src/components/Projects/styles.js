import styled from 'styled-components'
import { Header } from '../../styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
background: none;
padding-top: 61px;
height: fit-content;

@media screen and (max-width: 1200px){
padding-top: 20vw;
}
`;


export const Div = styled.div`
background: yellow;
min-height: 100vh;
`;

export const CustomHeader = styled(Header)`
align-self: center;
`;