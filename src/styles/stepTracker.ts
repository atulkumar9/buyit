import styled from "styled-components";
import { Roboto, FontWeight } from "./fontMixins";
import { Index } from "../interfaces/steps";

const getColorOnBasisOfStep = (props: { status: Index }, line?: string) => {
  switch (props.status) {
    case Index.CURRENT:
      return line ? "#bcbbb7" : "#5F5D9C";
    case Index.DONE:
      return "#5F5D9C";
    case Index.YET_TO_REACH:
      return "#bcbbb7";
    default:
      return "#bcbbb7";
  }
};

export const StepProgressBar = styled.ul`
  list-style: none;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding-left: 0;
  margin: 12px;
`;

export const StepProgressBarListItem = styled.li<{ status: Index }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 33%;
  &:before {
    content: "";
    width: 60%;
    height: 3px;
    position: absolute;
    top: 35%;
    left: 70%;
    transform: translate(0%, -50%);
    background-color: ${(props) => getColorOnBasisOfStep(props, "line")};
  }
  &:last-child {
    &:before {
      display: none;
    }
  }
`;

export const StepComponent = styled.div`
  margin: 120px 0 50px;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #190419;
  z-index: 1;
  align-items: center;
`;

export const Logo = styled.div<{ icon: string; status: Index }>`
  background-color: ${(props) => getColorOnBasisOfStep(props)};
  width: 20px;
  height: 20px;
  -webkit-mask: ${(props) => `url(${props.icon}) 0 0/20px 20px no-repeat`};
  mask: ${(props) => `url(${props.icon}) 0 0/20px 20px no-repeat`};
`;

export const Label = styled.span<{ status: Index }>`
  ${Roboto(16, 20, FontWeight.BOLD)}
  color: ${(props) => getColorOnBasisOfStep(props)};
  padding-top: 4px;
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

export const LogoContainer = styled.div<{ status: Index }>`
  border: 3px solid;
  border-color: ${(props) => getColorOnBasisOfStep(props)};
  border-radius: 50%;
  padding: 5px;
`;

export const Button = styled.button<{ enabled: Boolean }>`
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
