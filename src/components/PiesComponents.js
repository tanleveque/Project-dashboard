import React, { Component } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer, Cell, } from 'recharts';
import { Card, CardBody, CardHeader} from 'reactstrap';
import '../Container/Main.css';

const data = [
    { name: 'France', value: 346 }, 
    { name: 'Belgique', value: 594 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class PiesComponents extends Component {

    render() {
        return (

            <div>
                <Card className="card-box">
                    <CardHeader>% Passes </CardHeader>
                    <CardBody>
                        <ResponsiveContainer height={400} width="100%" class >
                            <PieChart >
                                <Pie data={data} dataKey="value" cx="50%" cy="50%" fill="#8884d8" >
                                {
                                    data.map((entry,index) => 
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    )
                                }
                                </Pie>  
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>

            </div>
        );
    }
}
