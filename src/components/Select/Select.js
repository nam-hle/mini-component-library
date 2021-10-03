import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import { getDisplayedValue } from "./Select.helpers";
import Icon from "../Icon";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log({ displayedValue });
  return (
    <Wrapper value={value} displayedValue={displayedValue} onChange={onChange}>
      {children}
      <Icon id={"chevron-down"} size={12} />
    </Wrapper>
  );
};

const Wrapper = styled.select`
  height: 43px;
  width: fit-content;

  padding: 10px 14px;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;

  //& option[value="newest"] {
  //  color: red;
  //}

  & option {
    color: ${COLORS.gray700};
  }
`;

export default Select;
