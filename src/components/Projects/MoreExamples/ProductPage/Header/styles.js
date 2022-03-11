import styled from 'styled-components'


export const Container = styled.div`
border-bottom: 1px solid black;
min-height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4rem;
`;
export const CenterList = styled.div`
display: flex;
gap: 5rem;
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
background-color: darkblue;
font-weight: bolder;
padding: 1rem 4rem;
color: white;
border-radius: 5px;
transition: all 0.5s ease-in-out;
border: 1px solid darkblue;
cursor: pointer;
&:hover {
  color: black;
  border-color: black;
  background-color: white;

}
`;

export const ListItem = styled.span`
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
cursor: pointer;
`;
