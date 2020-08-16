import React from "react";
import styled from "styled-components";
import ProductListItem from "./ProductListItem";

const Body = styled.div`
  background-color: ${props => props.theme.normalSky};
  height: 45vh;
`;

const AppTitle = styled.div`
  display: flex;
  height: 5vh;
  font-size: 2.5vh;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  flex: 1;
`;

const SearchResult = styled.div`
  height: 40vh;
  overflow-y: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Category = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 5vh;
  padding-left: 1vh;
  font-size: 2vh;
  overflow: hidden;
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  height: 5vh;
  width: 5vh;
  background-color: ${props => props.theme.normalSky};
`;

const Loading = styled.div`
  font-size: 20px;
  text-align: center;
  padding-top: 3px;
  height: 5vh;
`;
const Error = styled.div`
  font-size: 2vh;
  height: 5vh;
  align-items: center;
`;

// export default ({ Products, onRemove }) => {
export default ({ products }) => {
  return (
    <Body>
      <AppTitle>
        <Category> 제품번호(asin)</Category>
        <Category> 제품이름(name)</Category>
        <Category> 진열장번호(podID)</Category>
        <Category> 선반번호(binID)</Category>
        <Category> 제품높이(height) </Category>
        <Category> 제품길이(length)</Category>
        <Category> 제품넓이(width)</Category>
        <Category> 제품개수(quantity)</Category>
        <Category> 제품무게(weight)</Category>
        <Button></Button>
      </AppTitle>

      <SearchResult>
        {products.map(product => (
          <ProductListItem
            key={product.asin}
            product={product}
          // onRemove={onRemove}
          ></ProductListItem>
        ))}
      </SearchResult>
    </Body>
  );
};
