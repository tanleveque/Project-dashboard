import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';


export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                   <Col lg="10"> <h1> <Badge color="secondary">Dashboard</Badge> </h1> </Col>
                   <Col lg="2"> <h4> <Badge color="secondary">Levêque</Badge> </h4> </Col>
                </Row>
            </div>
        );
    }
}