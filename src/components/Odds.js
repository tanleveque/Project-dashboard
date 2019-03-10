import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardHeader, Row, Col } from 'reactstrap';

import '../Container/Main.css';
import './NumbersCard.css';

const data =
    [
        {
            name: "1",
            color: "#6495A3",
            data: 1.20,
        },
        {
            name: "NUL",
            color: "#AFCDCB",
            data: 6.30,
        },
        {
            name: "2",
            color: "#AFCDCB",
            data: 10.50,
        },

    ]


export default class Odds extends Component {
    render() {
        return (

            <div className="mt-5">
                <h4 className="text-center"> Odds next meeting </h4>
                <Row>
                    {data.map(d => (
                        <Col>
                            <Card className="card-box">
                                <CardHeader className="text-center data-text" style={{ backgroundColor: d.color }}>{d.name}</CardHeader>
                                <CardBody style={{ backgroundColor: d.color }}>
                                    <CardText className="text-center data-text">{d.data}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}