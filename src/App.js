import React, { Component } from 'react';
import Main from './Container/Main.js';
import SideMenu from './Container/SideMenu'
import Header from './components/Header';
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
            <Header />
            <div className="bg-app">
              <Main />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

