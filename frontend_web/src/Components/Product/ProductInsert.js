import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

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
  width: 8vw;
  &::placeholder {
    color: grey;
  }
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;
const Button = styled.button`
  outline: none;
  border: none;
  background: ${props => props.theme.brightSky};
  color: ${props => props.theme.darkSky};
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
          placeholder="  제품번호"
          name="제품번호"
        />
        <Input
          placeholder="  제품이름"
          name="제품이름"
        />
        <Input
          placeholder="  진열장번호"
          name="진열장번호"
        />
        <Input
          placeholder="  선반번호"
          name="선반번호"
        />
        <Input
          placeholder="  제품개수"
          name="제품개수"
        />
        <Button type="submit">
          <MdAdd></MdAdd>
        </Button>
      </Form>
      {/* )} */}
    </div>
  );
};
