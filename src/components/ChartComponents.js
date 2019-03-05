import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,} from 'recharts';
import { Card, CardBody, CardHeader,Row, Col} from 'reactstrap';

import './ChartComponents.css';

const series =
    [
        {
            serie: "Nombre d'étoiles",
            data: [
                { name: '1980', France: 0, Belgique: 0, amt: 2400 },
                { name: '1990', France: 0, Belgique: 0, amt: 2400 },
                { name: '1998', France: 1, Belgique: 0, amt: 2400 },
                { name: '2000', France: 1, Belgique: 0, amt: 2400 },
                { name: '2010', France: 1, Belgique: 0, amt: 2400 },
                { name: '2018', France: 2, Belgique: 0, amt: 2400 },
                { name: '2020', France: 2, Belgique: 0, amt: 2400 },
            ]
        },
        {
            serie: "Niveau de seum",
            data: [
                { name: '1980', France: 0, Belgique: 0, amt: 2400 },
                { name: '1990', France: 0, Belgique: 0, amt: 2400 },
                { name: '1998', France: 0, Belgique: 250, amt: 2400 },
                { name: '2000', France: 0, Belgique: 250, amt: 2400 },
                { name: '2010', France: 0, Belgique: 250, amt: 2400 },
                { name: '2018', France: 0, Belgique: 1000, amt: 2400 },
                { name: '2020', France: 0, Belgique: 1000, amt: 2400 },
            ]
        },
    ];

export default class ChartComponents extends Component {
    render() {
        return (
            <div className="back">
                <Row>
                    {series.map(s => (
                        <Col lg="6" >
                        <Card>
                            <CardHeader> {s.serie }</CardHeader>
                            <CardBody>
                                <ResponsiveContainer height={400}>
                                    <LineChart
                                        data={s.data}
                                        key={s.serie}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="France" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Belgique" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardBody>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </div >
        );
    }
}


