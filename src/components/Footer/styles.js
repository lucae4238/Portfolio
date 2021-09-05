import styled from 'styled-components'

export const Container = styled.div`
position: relative;
bottom: 0%;
background-color: green;
display: flex;
flex-direction: column;
height: 7vh;
align-items: center;
justify-content: space-around;
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
background-color: rgb(20, 0, 25, 0.5);
backdrop-filter: blur( 20.0px );

h3{
  &:hover{
    color: purple;
  }
}

@media screen and (max-width: 1200px){
  border-top: 1px solid white;
height: 8vh;
bottom: -10%;
font-size: 40px;
}
`;
