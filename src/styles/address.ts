import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";

export const SelectAddressContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

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
  width: 50%;
`;

export const Name = styled.p`
  ${PtSans(20, 24, FontWeight.BOLD)}
  margin: 0 0 10px;
`;

export const Address = styled.div`
  width: 85%;
  span {
    ${PtSans(20, 24)}
  }
`;

export const AddAddressForm = styled.form`
  margin: 0 auto;
  text-align: left;
`;

export const FormColumn = styled.div`
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  label {
    ${PtSans(20, 24, FontWeight.BOLD)}
    display: flex;
    width: 100%;
    justify-content: space-between;
    input {
      width: 60%;
      ${PtSans(20, 24)}
      border-radius: 5px;
      border-style: none;
      padding: 4px 8px;
    }
    span {
      width: 40%;
    }
  }
`;

export const SaveAddressButton = styled.button<{ enabled: boolean }>`
  margin-top: 20px;
  background-color: ${(props) => (props.enabled ? "#6196a6" : "grey")};
  padding: 10px 15px;
  border-radius: 10px;
  color: #f4edcc;
  ${Roboto(20, 24, FontWeight.BOLD)}
  border-style: none;
  cursor: ${(props) => (props.enabled ? "pointer" : "default")};
  &:hover {
    background-color: ${(props) => (props.enabled ? "#548796" : "grey")};
  }
`;

export const AddNewAddressContainer = styled.div`
  width: 40%;
`;

export const DeleteAddress = styled.div`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  img {
    width: 30px;
  }
`;

export const SavedAddress = styled.div`
  position: relative;
  width: 100%;
  background-color: #f4edcc;
  border-radius: 10px;
  width: 80%;
  border: 1px solid #fff;
  padding: 5px 10px;
  color: #5f5d9c;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  label {
    display: flex;
    width: 100%;
    input {
      margin-right: 15px;
      width: 20px;
    }
  }
`;
