import React, { Component } from 'react';
import SideMenu from './Container/SideMenu'
import Header from './Components/Header';
import Routes from './routes';
import { Row, Col} from 'reactstrap';
import './App.css';


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
               <Routes />
            </div>
          </Col>
        </Row> 
        
        
      </div>
    );
  }
}

export default App;

