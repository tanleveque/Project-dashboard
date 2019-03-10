import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardHeader, Row, Col, Progress } from 'reactstrap';


import '../Container/Main.css';

const datas =
    [
        {

            Team: "PSG",
            color: "#6495A3",
            Victory: 4,
            Draw: 1,
            Defeat: 0,

        },
        {

            Team: "Marseille",
            color: "#6495A3",
            Victory: 0,
            Draw: 1,
            Defeat: 4,
        },
    ]

export default class LastMeetingBtwTeams extends Component {
    render() {
        return (
            <div className="mt-5">
                <h4 className="text-center">Their last meetings</h4>
                <Row>
                    {datas.map(d => (
                        <Col>
                            <Card className="card-box">
                                <CardHeader className="text-center">{d.Team}</CardHeader>
                                <CardBody>
                                    <Row>

                                        <Col>
                                            <Card className="bg-success text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Victory : {d.Victory}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="bg-secondary text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Draw : {d.Draw}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                        <Col>
                                            <Card className="bg-danger text-white">
                                                <CardBody className="text-center">
                                                    <CardText>Defeat : {d.Defeat}</CardText>
                                                </CardBody>
                                            </Card>
                                        </Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        )
    }
}
