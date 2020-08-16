import React from "react";
import styled from "styled-components";
// import ProductDelete from "./ProductDelete";

const Body = styled.div`
  display: flex;
  background-color: white;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
`;

const Category = styled.div`
  padding-left: 1vh;
  display: flex;
  align-items: center;
  font-size: 2vh;
  flex: 1;
  outline: none;
  border: none;
  height: 5vh;
  font-size: 2vh;
  overflow: hidden;
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;

export default ({ pod }) => {
  return (
    <Body>
      <Category>{pod.podID}</Category>
      <Category>{pod.binID}</Category>
      <Category>{pod.emptinessScore}</Category>
      <Category>{pod.expectedQuantity}</Category>
      <Category>{pod.imageFrame}</Category>
      {/* <ProductDelete onRemove={onRemove} Product={Product}></ProductDelete> */}
    </Body>
  );
};
