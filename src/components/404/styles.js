import styled from "styled-components";

export const Container = styled.div`
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 500;
  img {
    height: auto;
    max-width: 40vw;
  }
  @media screen and (max-width: 1000px) {
    padding-top: 10vh;
    align-items: flex-start;
    img {
      max-width: 90vw;
    }
  }
`;
