import React, { Component } from 'react';
import ChartComponents from "./components/ChartComponents";
import PiesComponents from "./components/PiesComponents";
import CircularBar from './components/CircularBar';
import Btn from './components/Btn';
import SideMenu from './components/SideMenu'
import Header from './components/Header';
import './App.css';
import { Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col lg="2">
            <SideMenu />
          </Col>

          <Col lg="10">
            <main>
              <div>
               
                <CircularBar />
                
                <Row>
                  <Col lg="7"> <ChartComponents /> </Col>
                  <Col lg="3"> <PiesComponents /> </Col>
                </Row>

              </div>
            </main>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

