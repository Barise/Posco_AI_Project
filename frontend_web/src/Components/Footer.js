import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex: 1;
  width: 100%;
  height: 7.5vh;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  align-items: center;
  font-size: 2.5vh;
  padding-right: 2em;
  padding-left: 2em;
  font-family: "Jua", sans-serif;
`;

const LinkItem = styled.span`
  color: white;
  text-align: center;
`;
export default () => {
  return (
    <Footer>
      <Link to="About">
        <LinkItem>POPANG BY A03</LinkItem>
      </Link>
    </Footer>
  );
};
