/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WrapperStyles = {
  large: {
    height: "24px",
    padding: "3px",
    borderRadius: "8px",
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
  },
  small: {
    height: "8px",
    borderRadius: "4px",
  },
};

const ContentStyles = {
  large: {
    totalWidth: 370 - 4 * 2,
    borderRadius: "4px 0 0 4px",
  },
  medium: {
    totalWidth: 370,
    borderRadius: "4px 0 0 4px",
  },
  small: {
    totalWidth: 370,
    borderRadius: "4px 0 0 4px",
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <>
      <Wrapper
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        {...WrapperStyles[size]}
      >
        <Content {...ContentStyles[size]} value={value} />
      </Wrapper>
      <VisuallyHidden>ProgressBar</VisuallyHidden>
    </>
  );
};

const Wrapper = styled.div`
  height: ${(p) => p.height};
  width: 370px;

  border: 1px solid transparent;
  border-radius: ${(p) => p.borderRadius};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  padding: ${(p) => p.padding};

  background-color: ${COLORS.transparentGray15};
`;

const Content = styled.div`
  height: 100%;
  width: ${(p) => Math.round((p.value * p.totalWidth) / 10) / 10 + "px"};

  border-radius: 4px 0 0 4px;
  border-top-right-radius: ${(p) => p.value === 100 && "4px"};
  border-bottom-right-radius: ${(p) => p.value === 100 && "4px"};

  background-color: ${COLORS.primary};
`;

export default ProgressBar;
