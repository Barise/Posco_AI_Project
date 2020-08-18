import React from "react";
import styled from "styled-components";
import ProductDelete from "./ProductDelete";

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
    border-left: 3px solid ${props => props.theme.brightSky};
  }
`;

export default ({ product }) => {
  return (
    <Body>
      <Category>{product.id}</Category>
      <Category>{product.productID}</Category>
      <Category>{product.name}</Category>
      <Category>{product.podID}</Category>
      <Category>{product.binID}</Category>
      <Category>{product.quantity}</Category>
      <ProductDelete></ProductDelete>
    </Body>
  );
};
