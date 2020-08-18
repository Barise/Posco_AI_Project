import React from "react";
import styled from "styled-components";
// import StockListItem from "./StockListItem";

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
  height: 70vh;
  overflow-y: auto;
  background-color: white;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const TopButton = styled.button`
  border: none;
  outline: none;
  height: 5vh;
  width: 5vh;
  background-color: ${props => props.theme.normalSky};
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
const Button = styled.button`
  border: none;
  outline: none;
  height: 5vh;
  width: 5vh;
  background-color: yellow;
`;

const StockButton = styled.button`
  border: none;
  outline: none;
  height: 5vh;
  width: 5vh;
  background-color: white;
`;

const Body = styled.div`
  display: flex;
  background-color: yellow;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
`;
const StockedBody = styled.div`
  display: flex;
  background-color: white;
  height: 5vh;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
`;

const Category = styled.div`
  padding-left: 1vh;
  display: flex;
  align-items: center;
  font-size: 2vh;
  flex: 1;
  outline: none;
  border: none;
  height: 5vh;
  font-size: 2vh;
  overflow: hidden;
  & + & {
    border-left: 2px solid ${props => props.theme.brightSky};
  }
`;

// export default ({ Stock, onRemove }) => {
export default ({ stocks }) => {
  return (
    <StockBody>
      <StockAppTitle>
        <StockCategory> 진열장번호(podID)</StockCategory>
        <StockCategory> 선반번호(binID)</StockCategory>
        <StockCategory> 예상개수(expectedQuantity)</StockCategory>
        <StockCategory> Database기준 개수</StockCategory>
        <StockCategory> 이미지이름(imageName)</StockCategory>
        <TopButton></TopButton>
      </StockAppTitle>

      <StockSearchResult>
      <Body>
          <Category>E</Category>
          <Category>1</Category>
          <Category>4</Category>
          <Category>5</Category>
          <Category><a href="https://postfiles.pstatic.net/MjAyMDA4MTlfMjU4/MDAxNTk3Nzg1MDA3MDMy.w02ZpoC9x-FsLNbmAECTUnSn4PAyOXXRhq0mEsDSsUcg.iO5riRgUzsWWLIK7Dwo8asq8ruN-eY10pdwjHSlyftUg.JPEG.leeejihyun97/E_1.jpg?type=w966">A_5.jpg</a></Category>
          <Button></Button>
        </Body>
        <Body>
          <Category>E</Category>
          <Category>2</Category>
          <Category>1</Category>
          <Category>5</Category>
          <Category><a href="#">E_2.jpg</a></Category>
          <Button></Button>
        </Body>
        <Body>
        <Category>C</Category>
          <Category>1</Category>
          <Category>3</Category>
          <Category>5</Category>
          <Category><a href="#">C_1.jpg</a></Category>
          <Button></Button>
        </Body>
        <Body>
        <Category>C</Category>
          <Category>6</Category>
          <Category>3</Category>
          <Category>4</Category>
          <Category><a href="#">C_6.jpg</a></Category>
          <Button></Button>
        </Body>
        <Body>
        <Category>E</Category>
          <Category>2</Category>
          <Category>1</Category>
          <Category>5</Category>
          <Category><a href="#">E_2.jpg</a></Category>
          <Button></Button>
        </Body>
        <Body>
        <Category>E</Category>
          <Category>5</Category>
          <Category>2</Category>
          <Category>1</Category>
          <Category><a href="#">E_5.jpg</a></Category>
          <Button></Button>
        </Body>

        <StockedBody>
        <Category>E</Category>
          <Category>3</Category>
          <Category>5</Category>
          <Category>5</Category>
          <Category><a href="#">E_3.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>
        
        <StockedBody>
        <Category>C</Category>
          <Category>2</Category>
          <Category>1</Category>
          <Category>1</Category>
          <Category><a href="#">C_2.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>
        
        <StockedBody>
        <Category>C</Category>
          <Category>4</Category>
          <Category>2</Category>
          <Category>2</Category>
          <Category><a href="#">C_4.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>
        
        <StockedBody>
        <Category>C</Category>
          <Category>5</Category>
          <Category>1</Category>
          <Category>1</Category>
          <Category><a href="#">C_5.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>
        
        <StockedBody>
        <Category>A</Category>
          <Category>1</Category>
          <Category>1</Category>
          <Category>1</Category>
          <Category><a href="#">A_1.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>

        <StockedBody>
        <Category>A</Category>
          <Category>2</Category>
          <Category>1</Category>
          <Category>1</Category>
          <Category><a href="#">A_2.jpg</a></Category>
          <StockButton></StockButton>
        </StockedBody>
      </StockSearchResult>
    </StockBody>
  );
};
