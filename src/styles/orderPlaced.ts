import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";

export const OrderPlacedContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    ${PtSans(30, 34, FontWeight.BOLD)}
  }
  img {
    width: 100px;
    padding-left: 20px;
  }
`;

export const GotoHomeButton = styled.div`
  margin-top: 20px;
  background-color: #6196a6;
  padding: 10px 15px;
  border-radius: 10px;
  color: #f4edcc;
  ${Roboto(20, 24, FontWeight.BOLD)}
  border-style: none;
  cursor: pointer;
  &:hover {
    background-color: #548796;
  }
`;
