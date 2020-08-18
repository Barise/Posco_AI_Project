import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL } from '../constants';
import StockListItem from "../Components/Stock/StockListItem";
import StockList from "../Components/Stock/StockList"
const StockBody = styled.div`
  background-color: ${props => props.theme.normalSky};
  height: 45vh;
`;

const StockAppTitle = styled.div`
  display: flex;
  height: 5vh;
  font-size: 2.5vh;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  flex: 1;
`;

const StockSearchResult = styled.div`
  height: 40vh;
  overflow-y: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StockCategory = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 5vh;
  padding-left: 1vh;
  font-size: 2vh;
  overflow: hidden;
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;

const StockButton = styled.button`
  border: none;
  outline: none;
  height: 5vh;
  width: 5vh;
  background-color: ${props => props.theme.normalSky};
`;

const StockTemplate = styled.div`
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
      url('https://t1.daumcdn.net/cfile/tistory/994DED365A55CCF53B');
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
  width: 85%;
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
  const [stockTrue, setStockTrue] = useState([]);
  // const [stockFalse, setStockFalse] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${BASE_URL}/stock/falselist`)
    //   .then((res) => {
    //     setStockFalse(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
      axios
      .get(`${BASE_URL}/stock/truelist`)
      .then((res) => {
        setStockTrue(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <StockTemplate>
      <HeaderBox>
        <Wrapper>
          <BackgroundText>Stock Manage</BackgroundText>
        </Wrapper>
      </HeaderBox>

      <Body>
        <TitleBox></TitleBox>
        <AppTitle>재고관리</AppTitle>
        <Blank></Blank>
        {/* <InsertBox>
        <StockBody>
          <StockSearchResult>
            {stockTrue.map(stock=>(
              <StockListItem
              key={stock.binID}
              stock={stock}
              ></StockListItem>
            ))}
          </StockSearchResult>
        </StockBody>
        </InsertBox> */}


        <InsertBox>
        <StockBody>
          {/* <StockSearchResult>
            {stockFalse.map(stock=>(
              <StockListItem
              // key={stock}
              stock={stock}
              ></StockListItem>
            ))}
            </StockSearchResult> */}
            <StockList></StockList>
            {/* <StockSearchResult>
            {stockTrue.map(stock=>(
              <StockListItem
              key={stock.podID}
              stock={stock}
              ></StockListItem>
            ))}
          </StockSearchResult> */}
        </StockBody>
        </InsertBox>
      </Body>
    </StockTemplate>
  );
};
