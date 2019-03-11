import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardHeader, Row, Col, Table } from 'reactstrap';


import '../Container/Main.css';


const datas =
    [
        {
            Team: "PSG",
            Match: [
                {
                    Name: "PSG - Manchester United",
                    Score: "1 - 3",
                    Position: "Looser",
                },
                {
                    Name: "Caen - PSG",
                    Score: "1 - 2",
                    Position: "Winner",
                },
                {
                    Name: "PSG - Dijon",
                    Score: "3 - 0",
                    Position: "Winner",
                },
            ]
        },
        {
            Team: "Marseille",
            Match: [
                {
                    Name: "Olympique Marseille - Saint-Étienne",
                    Score: "2 - 0",
                    Position: "Winner",
                },
                {
                    Name: "Rennes - Olympique Marseille",
                    Score: "1 - 1",
                    Position: "Draw",
                },
                {
                    Name: "Olympique Marseille - Amiens SC",
                    Score: "2 - 0",
                    Position: "Winner",
                },
            ]
        },
    ]

export default class LastMeetingOverall extends Component {
    render() {
        return (
            <div className="mt-5">
                <h4 className="text-center">Last Meeting Overall</h4>
                <Row>
                    {datas.map(d => (
                        <Col>
                            <h5>{d.Team}</h5>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Match</th>
                                        <th>Score</th>
                                        <th>Position</th>
                                    </tr>
                                </thead>


                             {/*    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{d.Name}</td>
                                        <td>{d.Match}</td>
                                        <td>{d.Match}</td>
                                    </tr>
                                </tbody> */}

                            </Table>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
