import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants';
import GlobalStyles from "./Styles/GlobalStyles";
import Theme from "./Styles/Theme";
import Header from "./Components/Header";
import Routes from "./Components/Routes";
import Footer from "./Components/Footer";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { HashRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
`;

export default () => {

  // useEffect(() => {
  //   axios.get(`${BASE_URL}/binlist`)
  //     .then((res) => {
  //       console.log(res)
  //     });
  // }, []);

  return (
    < ThemeProvider theme={Theme} >
      <GlobalStyles />
      <Wrapper>
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </Wrapper>
    </ThemeProvider >
  );
};