import React, { Component } from 'react';
import ChartComponents from "./components/ChartComponents";
import PiesComponents from "./components/PiesComponents";
import CircularBar from './components/CircularBar';
import Btn from './components/Btn';
import SideMenu from './components/SideMenu'
import './App.css';
import { Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col lg="2">
            <SideMenu />
          </Col>

          <Col lg="10">
            <main>
              <Row>
                <Col lg="5"> <ChartComponents /> </Col>
                <Col lg="5"> <PiesComponents /> </Col>
                <Col lg="2"> <CircularBar /> </Col>
              </Row>
            </main>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

