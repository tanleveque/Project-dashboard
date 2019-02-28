import React, { Component } from 'react';
import './App.css';
import ChartComponents from "./components/ChartComponents";
import PiesComponents from "./components/PiesComponents";



class App extends Component {
  render() {
    return (
      <div>
        <ChartComponents/>
        <PiesComponents/>
      </div>
    );
  }
}

export default App;
