import React, { useCallback } from "react";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  background-color: white;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 5vh;
  width: 5vh;
  font-size: 3vh;
`;

export default () => {

  // const onDelete = useCallback(
  //   driver => {
  //     gqldeleteDriver({ variables: { email: driver.email } })
  //       .then(res => {
  //         console.log(res.data);
  //         onRemove(driver);
  //       })
  //       .catch(error => console.log(error));
  //   },
  //   [onRemove, gqldeleteDriver]
  // );

  return <Button>❌</Button>;
};
