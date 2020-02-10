import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import LastMeetingTabs from '../components/LastMeetingTabs';

import '../Container/Main.css';

const datas =
    [
        {

            Team: "PSG",
            color: "#6495A3",
            Victory: 3,
            Draw: 0,
            Defeat: 0,

        },
        {

            Team: "Marseille",
            color: "#6495A3",
            Victory: 0,
            Draw: 0,
            Defeat: 3,
        },
    ]

const ResultsBtwTeams =
    [
        {
            id: 0,
            Team: "PSG",
            Match: [
                {
                    Name: "Olympique Marseille - PSG",
                    Score: "0 - 2",
                    Position: "Winner",
                },
                {
                    Name: "PSG - Olympique Marseille",
                    Score: "3 - 0	",
                    Position: "Winner",
                },
                {
                    Name: "PSG - Olympique Marseille",
                    Score: "3 - 0",
                    Position: "Winner",
                },
            ]
        },
        {
            id: 1,
            Team: "Marseille",
            Match: [
                {
                    Name: "Olympique Marseille - PSG",
                    Score: "0 - 2",
                    Position: "Looser",
                },
                {
                    Name: "PSG - Olympique Marseille",
                    Score: "3 - 0",
                    Position: "Looser",
                },
                {
                    Name: "PSG - Olympique Marseille",
                    Score: "3 - 0",
                    Position: "Looser",
                },
            ]
        },
    ]

export default class LastMeetingBtwTeams extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        return (
            <div >
                <h4 className="text-center text-white font-weight-bold">Their last meetings</h4>
                <Row>
                    {datas.map(d => (
                        <Col>
                            <Card className="mt-2 mb-2">
                                <CardHeader className="text-center"><h5>{d.Team}</h5></CardHeader>
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


                <div className="mt-4">
                    <Button color="primary d-block ml-auto mr-auto pl-5 pr-5 shadow " onClick={this.toggle} >More information</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Row>
                                    {ResultsBtwTeams.map((data, index) => {
                                        return (
                                            <Col> <LastMeetingTabs key={index} Results={data} /> </Col>
                                        )
                                    })}
                                </Row>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <hr />
            </div>
        )
    }
}
