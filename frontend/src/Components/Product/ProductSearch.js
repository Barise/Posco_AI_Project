import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { useMutation } from "react-apollo-hooks";
import { searchDriver } from "./gplDriver";

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

export default ({ onSearch }) => {
  const [gqlsearchDriver, { loading, error, data }] = useMutation(searchDriver);

  const [form, setform] = useState(
    {
      term: ""
    },
    []
  );

  useEffect(() => {
    const onComplete = () => {
      if (data) {
        onSearch(data.searchDriver);
      }
    };
    if (onComplete || !loading || !error || data !== undefined) {
      onComplete();
    } else if (onComplete || !loading || error) {
      alert("onsearch error: " + error);
    }
  }, [loading, error, data, onSearch]);

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
      gqlsearchDriver({ variables: { ...form } });
      setform({
        term: ""
      });
      e.preventDefault();
    },
    [form, gqlsearchDriver]
  );

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="username  or  email  or  phoneNumber"
          name="term"
          onChange={onChange}
          value={form.term || ""}
        />
        <Button type="submit">
          <MdSearch></MdSearch>
        </Button>
      </Form>
    </div>
  );
};
