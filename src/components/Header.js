import React, { Component } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="main">
               {/* <Row>
                    <Col lg="1">
                        <h4> <Badge color="secondary">Levêque</Badge> </h4>
                    </Col>
                    <Col lg="1">
                        <h4> <Badge color="secondary">Duthu</Badge> </h4>
                    </Col>
                </Row> */}
            </div>
        );
    }
}