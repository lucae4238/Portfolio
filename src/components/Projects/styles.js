import styled from 'styled-components'
import { Header } from '../../styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
background: red;
padding-top: 61px;
height: max-content;
`;


export const Div = styled.div`
background: yellow;
min-height: 100vh;
`;

export const CustomHeader = styled(Header)`
align-self: center;
`;