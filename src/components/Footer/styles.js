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
@media screen and (max-width: 1200px){
  border-top: 1px solid white;
height: 7vh;
font-size: 40px;
}

`;

export const ContactContainer = styled.div`
position: absolute;
bottom: 110%;
height: 8rem;
width: 30vw;
border: 1px solid white;
border-radius: 100px;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 80px;
/* border: 1px solid white; */
border: 1px solid rgba( 255, 255, 255, 0.18 );
background: rgba(20, 0, 25, 0.9);
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
/* -webkit-backdrop-filter: blur( 20px ); */
@media screen and (max-width: 1200px){
height: 15vh;
width: 80vw;
/* background:red; */
font-size: 160px;
}

`;
