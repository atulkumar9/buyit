import styled from "styled-components";
import { PtSans, Roboto, FontWeight } from "./fontMixins";
import { Index } from "../interfaces/steps";

export const StepProgressBar = styled.ul`
  list-style: none;
  display: flex;
  width: 900px;
  align-items: center;
  justify-content: center;
  gap: 33%;
  padding-left: 0;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    &:before {
      content: "";
      width: 250px;
      height: 1px;
      position: absolute;
      top: 50%;
      left: 120%;
      transform: translate(0%, -50%);
      background-color: beige;
    }
    &:last-child {
      &:before {
        display: none;
      }
    }
  }
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Logo = styled.div<{ icon: string; status: Index }>`
  background-color: ${(props) => {
    switch (props.status) {
      case Index.CURRENT:
        return "#fff";
      case Index.DONE:
        return "#99fb76";
      case Index.YET_TO_REACH:
        return "#bcbbb7";
      default:
        return "#bcbbb7";
    }
  }};
  width: 25px;
  height: 25px;
  -webkit-mask: ${(props) => `url(${props.icon}) 0 0/25px 25px no-repeat`};
  mask: ${(props) => `url(${props.icon}) 0 0/25px 25px no-repeat`};
`;

export const Label = styled.span<{ status: Index }>`
  ${Roboto(18, 22, FontWeight.BOLD)}
  color: ${(props) => {
    switch (props.status) {
      case Index.CURRENT:
        return "#fff";
      case Index.DONE:
        return "#99fb76";
      case Index.YET_TO_REACH:
        return "#bcbbb7";
      default:
        return "#bcbbb7";
    }
  }};
`;

export const ImgContainer = styled.div<{ hide: boolean }>`
  visibility: ${(props) => (props.hide ? "hidden" : "visible")};
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 45px;
    margin: 0 20px;
  }
`;
