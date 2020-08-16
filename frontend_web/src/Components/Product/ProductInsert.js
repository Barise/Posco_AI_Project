import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Form = styled.form`
  display: flex;
  background-color: ${props => props.theme.brightSky};
  height: 5vh;
  width: 79vw;
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

  // const [form, setform] = useState(
  //   [
  //     {
  //       username: "",
  //       email: "",
  //       firstName: "",
  //       lastName: "",
  //       phoneNumber: "",
  //       busNum: ""
  //     }
  //   ],
  //   []
  // );

  // const onChange = useCallback(
  //   e => {
  //     const nextform = {
  //       ...form,
  //       [e.target.name]: e.target.value
  //     };
  //     setform(nextform);
  //   },
  //   [form]
  // );

  // const onSubmit = useCallback(
  //   e => {
  //     gqlcreateDriver({ variables: { ...form } });
  //     onInsert(form);
  //     setform({
  //       username: "",
  //       email: "",
  //       firstName: "",
  //       lastName: "",
  //       phoneNumber: "",
  //       busNum: ""
  //     });
  //     e.preventDefault();
  //   },
  //   [onInsert, form, gqlcreateDriver]
  // );

  return (
    <div>
      {/* {loading && <Loading>loading</Loading>}
      {error && <Error>error</Error>}
      {!loading && !error && ( */}
      <Form>
        <Input
          placeholder="  제품번호"
          name="제품번호"
          // onChange={onChange}
          // value={form.username || ""}
        />
        <Input
          placeholder="  제품이름"
          name="제품이름"
          // onChange={onChange}
          // value={form.email || ""}
        />
        <Input
          placeholder="  진열장번호"
          name="진열장번호"
          // onChange={onChange}
          // value={form.firstName || ""}
        />
        <Input
          placeholder="  선반번호"
          name="선반번호"
          // onChange={onChange}
          // value={form.lastName || ""}
        />
        <Input
          placeholder="  제품높이"
          name="제품높이"
          // onChange={onChange}
          // value={form.phoneNumber || ""}
        />
        <Input
          placeholder="  제품길이"
          name="제품길이"
          // onChange={onChange}
          // value={form.busNum || ""}
        />
        <Input
          placeholder="  제품넓이"
          name="제품넓이"
          // onChange={onChange}
          // value={form.busNum || ""}
        />
        <Input
          placeholder="  제품개수"
          name="제품개수"
          // onChange={onChange}
          // value={form.busNum || ""}
        />
        <Input
          placeholder="  제품무게"
          name="제품무게"
          // onChange={onChange}
          // value={form.busNum || ""}
        />
        <Button type="submit">
          <MdAdd></MdAdd>
        </Button>
      </Form>
      {/* )} */}
    </div>
  );
};
