import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  flex: 1;
  height: 7.5vh;
  background-color: #000000;
  justify-content: space-between;
  align-items: center;
  padding-right: 2em;
  padding-left: 2em;
  font-family: "Jua", sans-serif;
  text-align: right;
  font-size: 2.5vh;
`;

const LinkItem = styled.span`
  color: white;
  margin: 1rem;
  vertical-align: center;
  &:hover {
    color: red;
  }
`;

const Links = styled.div``;
export default () => {
  return (
    <Header>
      <Link to="">
        <img src={require("./../assets/logo.png")} alt="POPANG logo" height="45vh" />
      </Link>
      <Links>
        <Link to="Products">
          <LinkItem>Product</LinkItem>
        </Link>
        <Link to="Pods">
          <LinkItem>Pod</LinkItem>
        </Link>
        <Link to="Stock">
          <LinkItem>Stock</LinkItem>
        </Link>
      </Links>
    </Header>
  );
};
