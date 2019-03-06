import React, { Component } from 'react';
import ChartComponents from "../components/ChartComponents";
import PiesComponents from "../components/PiesComponents";
import CircularBarGrid from '../components/CircularBarGrid';
import ProgressBar from '../components/ProgressBar';
import NumbersCars from '../components/NumbersCard';
import { Row, Col } from 'reactstrap';
import './Main.css';


export default class Main extends Component {
    render() {
        return (
            <div className="bg-main">
                <ProgressBar />
                <NumbersCars/>
                <CircularBarGrid />
                <Row>
                    <Col lg="4"> <PiesComponents /> </Col>
                    <Col lg="8"> <ChartComponents /> </Col>
                </Row>
            </div>
        );
    }
}