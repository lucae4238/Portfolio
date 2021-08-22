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
a{
  text-decoration: none;
  color: white;
}

`;


export const Div = styled.div`
display: flex;
justify-content: space-around;
min-width: 50vw;
align-items: center;

`;