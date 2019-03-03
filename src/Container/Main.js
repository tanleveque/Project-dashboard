import React, { Component } from 'react';
import ChartComponents from "../components/ChartComponents";
import PiesComponents from "../components/PiesComponents";
import CircularBarGrid from '../components/CircularBarGrid';
import { Row, Col } from 'reactstrap';
import './Main.css';


export default class Main extends Component {
    render() {
        return (
            <div>
                <CircularBarGrid />

                <Row>
                    <Col lg="8"> <ChartComponents /> </Col>
                    <Col lg="4"> <PiesComponents /> </Col>
                </Row>
            </div>
        );
    }
}