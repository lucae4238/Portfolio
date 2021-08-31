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
border-radius: 10px;

/* grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr; */

`;

export const SkillItem = styled.div`
/* border: 1px solid white; */
display: block;
max-width: 8rem;
max-height: 8rem;
margin: 0.5rem;
overflow:hidden;
position: relative;
/* transition: bottom ease 0.5s; */
align-items: center;
h4{
  bottom: -70px;
  position: absolute;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: bottom ease 0.5s;
}
&:hover{
  h4{
    bottom: 0px;
    transition: bottom ease 0.5s;
      /* display:contents;  */
    }
  }
@media screen and (max-width: 1200px){
height: 43vw;
}
`;

export const CenteredHeader = styled(Header)`
align-self: center;
`;