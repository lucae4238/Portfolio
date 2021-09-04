import styled from 'styled-components';


export const Container = styled.button`
position: fixed;
bottom: 10vh;
right: 2vw;
/* width: auto; */
/* height: 8vh; */
/* width: 8vh; */
/* border: 1px solid white;
border-radius: 1300px; */
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
text-align: center;
opacity: 0.5;
&:hover{
  opacity: 1;
}
svg{
  color: purple;
  font-size: 80px;
  margin: 0;
}
p{
  margin: 0;
}
@media screen and (max-width: 1200px){
bottom: 5vh;
right:1vw;
svg{
  font-size: 180px
}
p{
  font-size: 40px
}

/* height: 6vh;
width: 6vh; */

}

`;