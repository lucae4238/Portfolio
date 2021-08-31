import styled from 'styled-components'
import Grid  from '@material-ui/core/Grid';

export const GridContainer = styled(Grid)`
display: flex;
position: fixed;
background-color: rgb(28, 1, 31, 1);
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
justify-content: space-between;
z-index: 1;
a h4{
  text-decoration: none;
  color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  :hover{
    text-decoration: underline;
    text-decoration-color: rebeccapurple;
    text-decoration-thickness: 3px;
    text-underline-offset: 3px;
    transform: scaleX(1);
  transform-origin: bottom left;;
  }
}

@media screen and (max-width: 1000px){
  font-size: 30px;
  flex-direction: column;
  min-height: 8vh;
  background-color: rgb(28, 1, 31, 0.1);
}


`;


// export const MenuContainer = styled.div`

export const PopUp = styled.div`
transition: opacity 1s ease-out;

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
-webkit-animation: fadeIn 0.5s;
    animation: fadeIn 0.6s;

background-color: red;

flex-direction: column;
margin: 0;
display: flex;
height: fit-content;
font-size: 50px;
padding: 0 3vw;
text-align: start;
background-color: rgb(28, 1, 31, 0.5);
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
background: orange;
display: ${props => props.isVisible ? "block" : "none"};
visibility: ${props => props.isVisible ? "visible" : "hidden"};
opacity: ${props => props.isVisible ? "100%" : "0"};
h4{
  margin: 2vh;
}
`;


export const StyledDiv = styled.div`
display: flex;

  background-color: rgb(28, 1, 31, 1);
@media screen and (max-width: 1200px){
  width: 98vw;
  margin:0;
  height: 8vh;
  justify-content: space-between;
  padding: 0 3vw;
}

`;

export const StyledIcon= styled.img`
display: none;
  height: 7vh;
  align-self: center;
  width: auto;
  margin-right: 3em;
@media screen and (max-width: 1200px){
  display: block;
}
`;

export const TranslateDiv = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: -50px;
img{
  max-height: 3vh;
}

h4{
  margin-left: 3vw;
}
`;

export const Div = styled.div`
display: flex;
justify-self: flex-end;
justify-content: space-around;
min-width: 50vw;
align-items: center;

@media screen and (max-width: 1200px){
display: none;
}
`;