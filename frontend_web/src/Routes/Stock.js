import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL } from '../constants';
import StockList from "../Components/Stock/StockList";

// import StockInsert from "../Components/Stock/StockInsert";
// import StockSearch from "../Components/Stock/StockSearch";
// import { searchStock } from "./KSM/gplStock";

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
  const [stocks, setStock] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/stock/list`)
      .then((res) => {
        setStock(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



  // const onSearch = useCallback(newData => {
  //   axios
  //     .post(`${BASE_URL}/stock/searchlist`)
  //   setstock(newData);
  // }, []);

  // register(authForm) {
  //   return axios.post(`${this.URL}/register/`, authForm);
  // }


  // const nextId = useRef(stock.length);


  // const onInsert = useCallback(
  //   form => {
  //     const stock = {
  //       id: nextId.current,
  //       ...form
  //     };
  //     setstock(stock.concat(stock));
  //     nextId.current += 1;
  //   },
  //   [stock]
  // );

  // const onRemove = useCallback(
  //     target => {
  //         setstock(stock.filter(stock => stock.id !== target.id));
  //     },
  //     [stock]
  // );

  return (
    <StockTemplate>
      <HeaderBox>
        <Wrapper>
          <BackgroundText>재고 Info List</BackgroundText>
        </Wrapper>
      </HeaderBox>

      <Body>
        <TitleBox>
          {/* <StockSearch onSearch={onSearch}></StockSearch> */}
        </TitleBox>
        {/* <StockInsert onInsert={onInsert}></StockInsert> */}
        <Blank></Blank>

        <InsertBox>
          {/* {loading && <Loading>loading</Loading>}
          {error && <Error>error</Error>}
          {!loading && !error && ( */}
          {/* <StockList stock={stock} onRemove={onRemove}></StockList> */}
          <StockList stocks={stocks}></StockList>
          {/* )} */}
        </InsertBox>
      </Body>
    </StockTemplate>
  );
};
