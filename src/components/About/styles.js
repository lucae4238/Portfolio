import styled from "styled-components";

export const Content = styled.div`
  background: none;
  display: grid;
  height: max-content;
  width: 80vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "img info";
  /* border: 1px solid white; */
  align-content: center;
  align-items: center;
  align-self: center;
  margin: 3rem 5rem -2rem 5rem;
  min-width: fit-content;

  /* background: orange; */

  @media screen and (max-width: 1200px) {
    height: inherit;
    grid-template-columns: 1fr;
    /* grid-template-rows: 0.5fr 1fr; */
    grid-template-areas:
      "info"
      "img";
    width: 100vw;
    margin-top: 10vh;
    grid-gap: 10vw;
    font-size: 30px;
    margin-bottom: 5vh;
    h1 {
      font-size: 90px;
    }
  }
`;

export const Info = styled.div`
  grid-area: info;
  border: 1px solid white;
  /* height: max-content; */
  /* min-height: 30rem; */
  height: fit-content;
  align-items: center;
  justify-content: center;
  margin: 3rem;
  background: rgba(95, 3, 103, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 2rem 2rem;
  .hover {
    :hover {
      color: purple;
    }
  }
`;

export const ContainerImg = styled.div`
  grid-area: img;
  z-index: 1;
  height: fit-content;
  justify-content: center;
  /* justify-self: baseline; */
  /* background: green; */
`;
export const CustomImg = styled.img`
  width: 30rem;
  min-height: 25rem;
  display: block;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
`;

export const SkillsDiv = styled.div`
  border: 1px solid white;
  width: 70vw;
  min-width: 30rem;
  display: flex;
  align-self: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  margin: 3rem;
`;
export const SkillsGrid = styled.div`
  /* background: blue; */
  border: 1px solid white;
  height: max-content;
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  /* grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr; */
`;

export const SkillItem = styled.div`
  background: purple;
  display: block;
  width: 10rem;
  height: 10rem;
  margin: 0.5rem;
`;

export const VideoContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 5vh 0;
`;
