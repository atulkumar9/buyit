import { css } from "styled-components";

export enum FontWeight {
  REGULAR,
  BOLD,
  ITALIC,
  BOLD_ITALIC,
}

const commonFontProperties = (
  fontSize: number,
  lineHeight: number,
  fontWeight: FontWeight = FontWeight.REGULAR
) => css`
  font-weight: ${() => {
    switch (fontWeight) {
      case FontWeight.REGULAR:
      case FontWeight.ITALIC:
        return "400";
      case FontWeight.BOLD:
      case FontWeight.BOLD_ITALIC:
        return "700";
      default:
        return "400";
    }
  }};
  font-style: ${() => {
    switch (fontWeight) {
      case FontWeight.REGULAR:
      case FontWeight.BOLD:
        return "normal";
      case FontWeight.ITALIC:
      case FontWeight.BOLD_ITALIC:
        return "italic";
      default:
        return "normal";
    }
  }};
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
`;

export const PtSans = (
  fontSize: number,
  lineHeight: number,
  fontWeight: FontWeight = FontWeight.REGULAR
) => css`
  font-family: "PT Sans", sans-serif;
  ${commonFontProperties(fontSize, lineHeight, fontWeight)}
`;

export const Roboto = (
  fontSize: number,
  lineHeight: number,
  fontWeight: FontWeight = FontWeight.REGULAR
) => css`
  font-family: "Roboto", sans-serif;
  ${commonFontProperties(fontSize, lineHeight, fontWeight)}
`;
