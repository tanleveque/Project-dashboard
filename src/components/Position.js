import React, { Component } from 'react';
import { Card, CardBody, CardText, CardHeader, Row, Col, Collapse, Button } from 'reactstrap';
import ChartComponents from './ChartComponents';

const datas =
    [
        {
            Team: "PSG",
            Rank: 1,
            Points: 74,
            Color: "#1A2B4C",
        },
        {
            Team: "OM",
            Rank: 4,
            Points: 47,
            Color: "#009DDC",
        },
    ]

const RankingEvol =
    [
        {
            serie: "Ranking Evolution",
            data: [
                { name: '1', PSG: 2, OM: 1},
                { name: '5', PSG: 1, OM: 2},
                { name: '10', PSG: 1, OM: 3},
                { name: '15', PSG: 1, OM: 5},
                { name: '20', PSG: 1, OM: 6},
                { name: '25', PSG: 1, OM: 4 },
                { name: '30', PSG: 1, OM: 4 },
            ]
        },

        {
            serie: "Points Evolution",
            data: [
                { name: '1', PSG: 3, OM: 3 },
                { name: '5', PSG: 15, OM: 10},
                { name: '10', PSG: 30, OM: 19 },
                { name: '15', PSG: 42, OM: 25},
                { name: '20', PSG: 56, OM: 30 },
                { name: '25', PSG: 67, OM: 40 },
                { name: '30', PSG: 75, OM: 50 },
            ]
        },

    ];

export default class Position extends Component {
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
            <div className="mt-5 mb-5">
                <h3 className="text-center text-white font-weight-bold"> Ranking position : ligue 1</h3>
                <Row>
                    {datas.map(d => (
                        <Col>
                            <Card className=" mt-2 mb-2 text-white text-center w-75 d-block ml-auto mr-auto" style={{ backgroundColor: d.Color }}>
                                <CardBody>
                                    <Row >
                                        <Col><CardText>{d.Team}</CardText></Col>
                                        <Col><CardText>Rank : {d.Rank} </CardText></Col>
                                        <Col><CardText> Points : {d.Points}</CardText></Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row >

                <div className="mt-4">
                    <Button color="primary d-block ml-auto mr-auto pl-5 pr-5 shadow " onClick={this.toggle} >More information</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <Row>
                                    {RankingEvol.map((data, index) => {
                                        return (
                                            <Col> <ChartComponents key={index} Ranking={data} /> </Col>
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