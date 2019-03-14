import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';


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
            <div className="mt-5">
                <h4 className="text-center">Their last meetings</h4>
                <Row>
                    {datas.map(d => (
                        <Col>
                            <Card className="mt-5 mb-5">
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

                                <div >
                                    <Button color="primary d-block ml-auto mr-auto pl-3 pr-3" onClick={this.toggle} >More information</Button>
                                    <Collapse isOpen={this.state.collapse}>
                                        <Card>
                                            <CardBody>
                                                Anim pariatur cliche reprehenderit,
                                                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                 nesciunt sapiente ea proident.
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        )
    }
}
