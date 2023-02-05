import { css } from "styled-components";

export const mobile = (inner) => css`
  @media (max-width: ${'320px'}) {
    ${inner};
  }
`;

export const tablet= (inner) => css`
  @media (max-width: ${'768px'}) {
    ${inner};
  }
`;
export const desktop= (inner) => css`
  @media (max-width: ${'1024px'}) {
    ${inner};
  }
`;
export const laptop= (inner) => css`
  @media (max-width: ${'2560px'}) {
    ${inner};
  }
`;