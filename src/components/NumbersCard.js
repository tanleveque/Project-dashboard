import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

import '../Container/Main.css';
import './NumbersCard.css';

const data =
    [
        {
            name: "Tirs France",
            color: "#6495A3",
            data: 8,
        },
        {
            name: "Tirs Belgique",
            color: "#AFCDCB",
            data: 9,
        },

    ]


export default class NumbersCard extends Component {
    render() {
        return (
            <Row>
                {data.map(d => (
                    <Col>
                        <Card className="card-box">

                            <CardBody style={{ backgroundColor: d.color }}>
                                <Row>
                                    <Col lg="8">
                                        <CardTitle className="text-white">{d.name}</CardTitle>
                                    </Col>
                                    <Col lg="4">
                                        <CardText className="text-center data-text">{d.data}</CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        )
    }
}