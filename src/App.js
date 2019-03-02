import React, { Component } from 'react';
import './App.css';
import ChartComponents from "./components/ChartComponents";
import PiesComponents from "./components/PiesComponents";
import CircularBar from './components/CicularBar';
import Btn from './components/Btn';

import {  Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Btn />
        </div>

        <Row>
          <Col lg="5"> <ChartComponents/> </Col>
          <Col lg="5"> <PiesComponents /> </Col>
          <Col lg="2"> <CircularBar /> </Col>
        </Row>
      </div>
    );
  }
}

export default App;

