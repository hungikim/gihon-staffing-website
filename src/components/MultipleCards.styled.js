import { CardSection } from "./Pages.styled";
import styled from "styled-components";

export const Wrapper = styled(CardSection)`
  /* outline: 1px solid black; */
  box-shadow: none;
  padding: 0;
  margin: 0;

`

export const OL = styled.ol`
  /* outline: 2px solid black; */
  display: flex;
  gap: 50px;
  list-style-position: inside;

  @media (min-width: 769px) {
    padding: 30px 2vw;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 0 20px;
  }
`;

export const LI = styled.li`
  /* outline: 1px solid; */
  flex-grow: 1;
  flex-basis: 33%;

  font-size: 1em;
  padding: 10px 30px 30px 30px;
  background: var(--bg-color);
  color: var(--main-color);
  box-shadow: 2px 2px 6px;
`;

