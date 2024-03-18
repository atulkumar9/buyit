import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";

export const CheckoutContainer = styled.div`
  max-width: 40%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const CheckoutItemsContainer = styled.ul`
  list-style: none;
  gap: 20px;
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
    border: 1px solid #fff;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: rgb(231 232 255 / 33%);
    color: #f4edcc;
    justify-content: space-evenly;
  }
  img {
    width: 50px;
    height: 70px;
  }
`;

export const ItemInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin: 5px;
  }
`;

export const Name = styled.p`
  ${PtSans(18, 20, FontWeight.BOLD)}
`;

export const Price = styled.p`
  ${Roboto(18, 20, FontWeight.BOLD)}
`;

export const Savings = styled.p`
  ${PtSans(18, 20, FontWeight.ITALIC)}
`;

export const RemoveFromBag = styled.div`
  cursor: pointer;
  img {
    width: 30px;
  }
`;

export const OrderButton = styled.button`
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

export const NotFoundImg = styled.img`
  width: 80px;
  padding-top: 20px;
`;
