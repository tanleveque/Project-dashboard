import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,Label ,ResponsiveContainer,} from 'recharts';
import { Card, CardBody, CardHeader,Row, Col} from 'reactstrap';

import './ChartComponents.css';
import '../Container/Main.css';


export default class ChartComponents extends Component {
    render() {

        const { Ranking } = this.props;

        return (
            <div className="background">
                <Row >
                        <Col>
                        <Card className="card-box" >
                            <CardHeader> {Ranking.serie }</CardHeader>
                            <CardBody>
                                <ResponsiveContainer height={400}>
                                    <LineChart
                                        data={Ranking.data}
                                        key={Ranking.serie}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 5,
                                        }}
                                        
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" ></XAxis>
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="PSG" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Marseille" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div >
        );
    }
}


