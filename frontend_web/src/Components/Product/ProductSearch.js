import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";

const Form = styled.form`
  display: flex;
  background-color: ${props => props.theme.brightSky};
  height: 5vh;
  width: 84vw;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
`;

const Input = styled.input`
  font-size: 2vh;
  flex: 1;
  outline: none;
  border: none;
  height: 5vh;
  background-color: ${props => props.theme.brightSky};
  &::placeholder {
    text-align: center;
    color: grey;
  }
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: ${props => props.theme.darkSky};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 5vh;
  width: 5vh;
  font-size: 3vh;
`;

export default () => {
  return (
    <div>
      <Form>
        <Input
          placeholder="제품을 검색해 주세요"
          name="term"
        />
        <Button type="submit">
          <MdSearch></MdSearch>
        </Button>
      </Form>
    </div>
  );
};
