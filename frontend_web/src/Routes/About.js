import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useDencrypt } from "use-dencrypt-effect";

const buttonHover = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  min-height: 100%;
  height: 92.5vh;
  top: 0;
  left: 0;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://s3.ap-northeast-2.amazonaws.com/cloimage/home/rails/clo/public/ckeditor_assets/pictures/2805/content_8.jpg);
  background-size: cover;
`;

const Title = styled.div`
  text-align: center;
  font-size: 5rem;
  color: #20639b;
  font-weight: bold;
  font-family: "Jua", sans-serif;
  color: white;
  margin-top: 11rem;
  text-shadow: 2px 2px 2px gray;
`;

const TextBox = styled.div`
  color: white;
  font-size: 1.3rem;
  text-align: center;
  font-weight: bold;
  font-family: "Jua", sans-serif;
  opacity: 0.6;
  /* -webkit-text-stroke: 0.1px #182446; */
`;

const APKButton = styled.div`
  text-align: center;
`;

const Label = styled.div`
  color: white;
  font-family: "Jua", sans-serif;
`;

const Button = styled.button`
  background-color: #31475e;
  border: none;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 2px;
  -webkit-appearance: none;
  color: white;
  padding: 1rem 3rem;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  margin: 1em;
  font-family: "Jua", sans-serif;
  cursor: pointer;
  opacity: 0.7;
  ${props =>
    props.darkSky &&
    css`
      background: #0e30f0;
    `}

  ${props =>
    props.brightSky &&
    css`
      background: #ff9697;
    `}

    &:hover {
    animation: ${buttonHover} 0.4s forwards;
  }
`;
const values = ["Posco Academy", "A03조", "POPANG"];

export default () => {
  const { result, dencrypt } = useDencrypt();

  useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  let data = `
    
        POPANG이란 컴퓨터 비전을 활용한 물류 및 재고 관리 서비스입니다.

        저희는 'Fulfillment'를 통해 플랫폼과 고객이 직접 만나는  
        
        D2C(Direct to Consumer) 비지니스 달성을 목표로

        React와 Nodejs를 이용해 본 서비스를 개발하였습니다.

        `;
  return (
    <Wrapper>
      <Title>{result ? result : "POPANG"}</Title>
      <TextBox>
        {data.split("\n").map(line => {
          return (
            <span>
              {line}
              <br />
            </span>
          );
        })}
      </TextBox>

      <APKButton>
        <a href="http://naver.com">
          <Button>IOS</Button>
        </a>
        <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40kdd/native-c3df557b40d44eafaadca1e99ff82836-signed.apk">
          <Button>Android</Button>
        </a>
      </APKButton>
    </Wrapper>
  );
};
