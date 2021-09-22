import styled from 'styled-components'

export const ContactContainer = styled.div`
position: ${props => props.position || "absolute"};
bottom: 110%;
height: 8rem;
width: 24rem;
border: 1px solid white;
border-radius: 100px;
display: flex;
justify-content: space-around;
align-items: center;
font-size: ${props => props.fontSize || "80px"};
border: 1px solid rgba( 255, 255, 255, 0.18 );
background: rgba(20, 0, 25, 0.95);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );


div {
margin:0;
display: flex;
align-items: center;
padding: 0;
  :hover{
    color: purple;
    cursor: pointer;
  }
}

@media screen and (max-width: 1200px){
height: 15vh;
width: 80vw;
/* background:red; */
font-size: 160px;
}
`;