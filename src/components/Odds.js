import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col } from 'reactstrap';

import '../Container/Main.css';
import './Odds.css';

const data =
    [
        {
            name: "1",
            color: "#1A2B4C",
            data: 1.20,
        },
        {
            name: "Draw",
            color: "#6C757D",
            data: 6.30,
        },
        {
            name: "2",
            color: "#009DDC",
            data: 10.50,
        },

    ]


export default class Odds extends Component {
    render() {
        return (

            <div className="mt-5 mb-5">
                <h3 className="text-center text-white font-weight-bold"> Odds next meeting </h3>
                <Row>
                    {data.map(d => (
                        <Col>
                            <Card className=" mt-2 mb-2 text-white" style={{ backgroundColor: d.color }}>
                                <CardHeader className="text-center " >{d.name}</CardHeader>
                                <CardBody>
                                    <CardText className="text-center ">{d.data}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}