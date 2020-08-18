import React from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import ImageUpload from '../ImageUpload/ImageUpload'
const Form = styled.form`
  display: flex;
  background-color: ${props => props.theme.brightSky};
  height: 5vh;
  width: 79vw;
  justify-content: center;
  align-items: center;
  font-size: 2.5vh;
`;

const Wrapper = styled.div`
  text-align:center;
`


const Blank = styled.div`
  background-color: ${props => props.theme.white};
  height: 5vh;
`;

const Input = styled.input`
  font-size: 2vh;
  flex: 1;
  outline: none;
  border: none;
  height: 5vh;
  width: 8vw;
  text-align:center;
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
    <Wrapper>
      <Blank></Blank>
      <ImageUpload></ImageUpload>
      <Form>
        <Input
          placeholder="  진열장(Pod) 이름"
          name="Pod 이름"
        />
        <Button type="submit">
          <MdAdd></MdAdd>
        </Button>
      </Form>
      </Wrapper>
  );
};
