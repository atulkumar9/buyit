import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  ul {
    width: 90%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    justify-content: space-between;
    grid-gap: 10px;
  }
`;

export const Product = styled.li<{ isselected: string }>`
  background-color: #5a686c;
  width: 500px;
  border: 1px solid #fff;
  border-radius: 12px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  ${PtSans(16, 20)}
  position: relative;
  cursor: pointer;
  > img {
    width: 500px;
    height: 625px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    transition: 0.5s ease;
    opacity: ${(props) => (props.isselected === "true" ? 0.3 : 1)};
    backface-visibility: hidden;
  }
  &:hover {
    > img {
      opacity: 0.3;
    }
  }
`;

export const ItemDetail = styled.div`
  padding: 5px 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const ProductDescription = styled.p`
  ${PtSans(16, 20, FontWeight.ITALIC)}
`;

export const ProductName = styled.p`
  ${PtSans(20, 24, FontWeight.BOLD)}
`;

export const DiscountContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  ${Roboto(16, 20)}
  width: 100%;
`;

export const PriceBeforeDiscount = styled.span`
  text-decoration: line-through;
  color: #e95c5c;
`;

export const PriceAfterDiscount = styled.span`
  color: #a4ce95;
`;

export const Savings = styled.span`
  background-color: #a4ce95;
  color: white;
  padding: 3px;
  border-radius: 5px;
`;
