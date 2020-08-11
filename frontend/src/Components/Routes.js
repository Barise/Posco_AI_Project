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
        <Redirect from="*" to="/" />
      </Switch>
    </Body>
  </Router>
);

export default AppRouter;
