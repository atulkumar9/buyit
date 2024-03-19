import styled from "styled-components";
import { Roboto, FontWeight, PtSans } from "./fontMixins";

export const AddToBag = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  width: 150px;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  img {
    width: 20px;
    padding-left: 10px;
  }
`;

export const Error = styled.div`
  ${Roboto(20, 24, FontWeight.ITALIC)}
  color: #f25555;
  padding-top: 20px;
  text-align: left;
`;

export const FallbackContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    ${PtSans(20, 24, FontWeight.BOLD)}
  }
  h1 {
    ${PtSans(60, 66, FontWeight.BOLD)}
  }
  img {
    width: 300px;
  }
`;
