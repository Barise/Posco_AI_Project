import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL } from '../constants';

// import ProductInsert from "./KSM/ProductInsert";
// import ProductSearch from "./KSM/ProductSearch";
// import ProductList from "./KSM/ProductList";
// import { searchProduct } from "./KSM/gplProduct";

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

    useEffect(() => {
        axios.get(`${BASE_URL}/binlist`)
            .then((res) => {
                console.log(res)
            });
    }, []);

    // useEffect(() => {
    //     if (data) {
    //         setproducts(data.searchProduct);
    //     }
    // }, [data]);

    // const nextId = useRef(products.length);

    // const onInsert = useCallback(
    //     form => {
    //         const product = {
    //             id: nextId.current,
    //             ...form
    //         };
    //         setproducts(products.concat(product));
    //         nextId.current += 1;
    //     },
    //     [products]
    // );

    // const onRemove = useCallback(
    //     target => {
    //         setproducts(products.filter(product => product.id !== target.id));
    //     },
    //     [products]
    // );

    // const onSearch = useCallback(newData => {
    //     setproducts(newData);
    // }, []);

    return (
        <ProductTemplate>
            <HeaderBox>
                <Wrapper>
                    <BackgroundText>제품 Info List</BackgroundText>
                </Wrapper>
            </HeaderBox>

            <Body>
                <TitleBox>
                    {/* <ProductSearch onSearch={onSearch}></ProductSearch> */}
                </TitleBox>

                <AppTitle>제품 정보 추가</AppTitle>
                {/* <ProductInsert onInsert={onInsert}></ProductInsert> */}
                <Blank></Blank>

                {/* <InsertBox>
                    {loading && <Loading>loading</Loading>}
                    {error && <Error>error</Error>}
                    {!loading && !error && (
                        <ProductList products={products} onRemove={onRemove}></ProductList>
                    )}
                </InsertBox> */}
            </Body>
        </ProductTemplate>
    );
};
