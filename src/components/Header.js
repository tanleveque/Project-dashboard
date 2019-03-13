import React, { Component } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <Col lg="3">
                        <h4> <Badge color="secondary">Levêque</Badge> </h4>
                    </Col>
                </Row>
            </div>
        );
    }
}