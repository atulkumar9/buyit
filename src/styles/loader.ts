import styled, { keyframes } from "styled-components";
import { FontWeight, Roboto } from "./fontMixins";

const LoaderAnimation = keyframes`
  0% {   background-image: linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
  25% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
  50% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
  75% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0); }
  100% {   background-image: linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0), linear-gradient(#FF3D00 20px, transparent 0); }
`;

export const LoaderSpinner = styled.div`
  display: block;
  position: relative;
  height: 20px;
  width: 140px;
  background-image: linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0),
    linear-gradient(#fff 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 20px auto;
  background-position: 0 0, 40px 0, 80px 0, 120px 0;
  animation: ${LoaderAnimation} 1s linear infinite;
`;

export const LoaderOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #f4edcc;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
`;

export const LoaderTitle = styled.p`
  ${Roboto(30, 34, FontWeight.BOLD)}
  color: #6196A6;
  padding: 10px;
`;
