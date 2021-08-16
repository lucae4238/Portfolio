import styled from 'styled-components'
import Grid  from '@material-ui/core/Grid';

export const GridContainer = styled(Grid)`
display: flex;
position: fixed;
background-color: yellowgreen;
justify-content: space-between;
a{
  text-decoration: none;
  color: white;
}

`;


export const Div = styled.div`
display: flex;
justify-content: space-around;
width: 50vw;

`;