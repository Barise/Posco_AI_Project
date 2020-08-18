import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL } from '../constants';

import ProductInsert from "../Components/Product/ProductInsert";
import ProductList from "../Components/Product/ProductList";
import ProductSearch from "../Components/Product/ProductSearch";


const ProductTemplate = styled.div`
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
    url(https://s3-ap-northeast-2.amazonaws.com/www.sktinsight.com/wp-content/uploads/2017/09/%EC%95%84%EB%A7%88%EC%A1%B4%EC%9D%98%EB%B4%87%EB%B4%87%EB%B4%87_2.jpg);
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
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/product/list`)
      .then((res) => {
        setproducts(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);



  // const onSearch = useCallback(newData => {
  //   axios
  //     .post(`${BASE_URL}/product/searchlist`)
  //   setproducts(newData);
  // }, []);

  // register(authForm) {
  //   return axios.post(`${this.URL}/register/`, authForm);
  // }


  // const nextId = useRef(products.length);


  // const onInsert = useCallback(
  //   form => {
  //     const product = {
  //       id: nextId.current,
  //       ...form
  //     };
  //     setproducts(products.concat(product));
  //     nextId.current += 1;
  //   },
  //   [products]
  // );

  // const onRemove = useCallback(
  //     target => {
  //         setproducts(products.filter(product => product.id !== target.id));
  //     },
  //     [products]
  // );

  return (
    <ProductTemplate>
      <HeaderBox>
        <Wrapper>
          <BackgroundText>Product Manage</BackgroundText>
        </Wrapper>
      </HeaderBox>

      <Body>
        <TitleBox>
          <ProductSearch ></ProductSearch>
        </TitleBox>

        <AppTitle>제품을 추가하세요</AppTitle>
        {/* <ProductInsert onInsert={onInsert}></ProductInsert> */}
        <ProductInsert></ProductInsert>
        <Blank></Blank>

        <InsertBox>
          {/* {loading && <Loading>loading</Loading>}
          {error && <Error>error</Error>}
          {!loading && !error && ( */}
          {/* <ProductList products={products} onRemove={onRemove}></ProductList> */}
          <ProductList products={products}></ProductList>
          {/* )} */}
        </InsertBox>
      </Body>
    </ProductTemplate>
  );
};
