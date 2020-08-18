import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL } from '../constants';

import PodList from "../Components/Pod/PodList";
import PodInsert from "../Components/Pod/PodInsert";
import PodSearch from "../Components/Pod/PodSearch";

const PodTemplate = styled.div`
  min-height: 100%;
  height: 200vh;
  width: 100%;
  background-color: ${props => props.theme.white};
  margin: auto;
  border-radius: 1vh;
  align-items: center;
  font-family: "Jua", sans-serif;
`;

const HeaderBox = styled.div`
  height: 30%;
  position: relative;
`;

const Wrapper = styled.div`
  vertical-align: center;
  background: linear-gradient(
      to left,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://t1.daumcdn.net/cfile/tistory/997E5C3C5BA1E68137);
  min-height: 100%;
`;

const BackgroundText = styled.div`
  font-size: 4em;
  text-shadow: 2px 2px 2px gray;
  border-bottom: 2px solid white;
  border-top: 2px solid white;
  padding-bottom: 1em;
  padding-top: 1em;
  background-color: transparent;
  text-align: center;
  font-family: "Jua", sans-serif;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
  color: white;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
`;

const Body = styled.div`
  align-items: center;
  width: 80%;
  padding-top: 5%;
  margin: auto;
`;

const AppTitle = styled.div`
  color: white;
  background-color: ${props => props.theme.darkSky};
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vh;
`;

const Blank = styled.div`
  background-color: ${props => props.theme.white};
  height: 5vh;
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

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

const InsertBox = styled.div`
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [pods, setpods] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pod/list`)
      .then((res) => {
        setpods(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <PodTemplate>
      <HeaderBox>
        <Wrapper>
          <BackgroundText>Pod Manage</BackgroundText>
        </Wrapper>
      </HeaderBox>

      <Body>
        

        <AppTitle>진열장(Pod) 이름과 이미지를 업로드 해주세요.</AppTitle>
        <PodInsert></PodInsert>
        <Blank></Blank>

        <TitleBox>
          <PodSearch></PodSearch>
        </TitleBox>
        <InsertBox>
          <PodList pods={pods}></PodList>
        </InsertBox>
      </Body>
    </PodTemplate>
  );
};
