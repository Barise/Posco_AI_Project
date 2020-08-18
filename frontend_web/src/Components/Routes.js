import React from "react";
import PropTypes from "prop-types";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import About from "../Routes/About";
import Products from "../Routes/Products";
import Pods from "../Routes/Pods";
import Stock from "../Routes/Stock";
import Image from "../Routes/Image";

const Body = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

const AppRouter = () => (
  <Router>
    <Body>
      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route path="/Products" component={Products}></Route>
        <Route path="/Pods" component={Pods}></Route>
        <Route path="/Stock" component={Stock}></Route>
        <Route path="/Image" component={Image}></Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Body>
  </Router>
);

export default AppRouter;
