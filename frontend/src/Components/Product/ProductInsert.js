import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Form = styled.form`
  display: flex;
  background-color: ${props => props.theme.brightSky};
  height: 5vh;
  width: 80vw;
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
  width: 12vw;
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

export default ({ onInsert }) => {
  const [gqlcreateDriver, { loading, error }] = useMutation(createDriver);

  const [form, setform] = useState(
    [
      {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        busNum: ""
      }
    ],
    []
  );

  const onChange = useCallback(
    e => {
      const nextform = {
        ...form,
        [e.target.name]: e.target.value
      };
      setform(nextform);
    },
    [form]
  );

  const onSubmit = useCallback(
    e => {
      gqlcreateDriver({ variables: { ...form } });
      onInsert(form);
      setform({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        busNum: ""
      });
      e.preventDefault();
    },
    [onInsert, form, gqlcreateDriver]
  );

  return (
    <div>
      {/* {loading && <Loading>loading</Loading>}
      {error && <Error>error</Error>}
      {!loading && !error && ( */}
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="  username"
          name="username"
          onChange={onChange}
          value={form.username || ""}
        />
        <Input
          placeholder="  email"
          name="email"
          onChange={onChange}
          value={form.email || ""}
        />
        <Input
          placeholder="  firstName"
          name="firstName"
          onChange={onChange}
          value={form.firstName || ""}
        />
        <Input
          placeholder="  lastName"
          name="lastName"
          onChange={onChange}
          value={form.lastName || ""}
        />
        <Input
          placeholder="  phoneNumber"
          name="phoneNumber"
          onChange={onChange}
          value={form.phoneNumber || ""}
        />
        <Input
          placeholder="  busNum"
          name="busNum"
          onChange={onChange}
          value={form.busNum || ""}
        />
        <Button type="submit">
          <MdAdd></MdAdd>
        </Button>
      </Form>
      {/* )} */}
    </div>
  );
};
