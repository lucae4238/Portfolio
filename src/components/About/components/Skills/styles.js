import styled from "styled-components";
import { Header } from "../../../../styled-components";

export const SkillsDiv = styled.div`

/* border: 1px solid white; */
width: 70vw;
min-width: 30rem;
display: flex;
align-self: center;
display: flex;
flex-direction: column;
height: max-content;
margin: 3rem;

@media screen and (max-width: 1200px){
h1{
  font-size: 80px;
  width: 100vw;
  text-align: center;
}
}
`;
export const SkillsGrid = styled.div`
/* background: blue; */
border: 1px solid white;
height: max-content;
padding: 3rem;
display:flex;
flex-wrap: wrap;
justify-content: center;
background: rgba( 95, 3, 103, 0.10 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-radius: 10px;

/* grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr; */

`;

export const SkillItem = styled.div`
/* border: 1px solid white; */
display: flex;
max-width: 7rem;
max-height: 7rem;
margin: 0.5rem;
overflow:hidden;
position: relative;
/* transition: bottom ease 0.5s; */
align-items: center;
h4{
  bottom: -70px;
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  transition: bottom ease 0.5s;
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
}
&:hover{
  h4{
    bottom: 0px;
    transition: bottom ease 0.5s;
      /* display:contents;  */
    }
  }
@media screen and (max-width: 1200px){
max-height: 43vw;
max-width: 43vw;
font-size: 33px;
img{
  width: 20vw;
}
h4{
  bottom: -170px;
}
}
`;

export const CenteredHeader = styled(Header)`
align-self: center;
`;