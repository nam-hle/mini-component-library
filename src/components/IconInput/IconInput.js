import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    height: 24,
    iconStrokeWidth: 1,
    iconSize: 16,
    border: 1,

    fontSize: 14,
    lineHeight: 16,
  },
  large: {
    height: 36,
    iconStrokeWidth: 2,
    iconSize: 24,
    border: 2,

    fontSize: 18,
    lineHeight: 21,
  },
};

const IconInput = ({ label, icon, width = 150, size, placeholder }) => {
  const styles = SIZES[size];
  return (
    <Wrapper width={width} {...styles}>
      <IconWrapper
        size={styles.iconSize}
        strokeWidth={styles.iconStrokeWidth}
        id={icon}
      />
      <NativeInput placeholder={placeholder} {...styles} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(p) => p.width + "px"};
  height: ${(p) => p.height + "px"};

  position: relative;

  border-bottom: ${(p) => p.border}px solid ${COLORS.black};

  &:focus {
    outline: 2px solid ${COLORS.macOsOutline};
    outline-offset: 4px;
  }
`;

const IconWrapper = styled(Icon)`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};

  color: ${COLORS.gray700};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  pointer-events: none;
`;

const NativeInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  padding-left: ${(p) => p.iconSize * 1.5}px;

  color: ${COLORS.gray700};
  font-family: Roboto, sans-serif;
  font-size: ${(p) => p.fontSize / 16 + "rem"};
  font-weight: 700;
  line-height: ${(p) => p.lineHeight}px;
  letter-spacing: 0.8px;
  text-align: left;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;
export default IconInput;
