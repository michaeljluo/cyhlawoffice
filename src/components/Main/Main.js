import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Main.css';
import { Divider } from '@material-ui/core';
import "bootstrap/dist/css/bootstrap.min.css";


import { Container, Row, Col } from 'reactstrap';

export const Main = () => (
  
  <div className="Main">
    <h1>Chi Yuan Huang Law Office Home Page</h1>
    <h2 className="subheader">Case List</h2>
    <div className="caseList">
        <Divider/>
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </div>
    Main Component
  </div>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
