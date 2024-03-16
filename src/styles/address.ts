import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";

export const SelectAddressContainer = styled.div``;

export const Title = styled.p`
  ${PtSans(30, 34, FontWeight.BOLD)}
  text-align: center;
`;

export const SavedAddressContainer = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  label {
    background-color: #f4edcc;
    border-radius: 10px;
    width: 60%;
    border: 1px solid #fff;
    padding: 10px 15px;
    color: #5f5d9c;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    input {
      margin-right: 15px;
      width: 20px;
    }
  }
`;

export const Name = styled.p`
  ${PtSans(20, 24, FontWeight.BOLD)}
  margin: 0 0 10px;
`;

export const Address = styled.div`
  width: 90%;
  span {
    ${PtSans(20, 24)}
  }
`;
