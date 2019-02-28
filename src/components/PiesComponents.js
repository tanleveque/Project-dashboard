import React, { Component } from 'react';
import { PieChart, Pie, Legend } from 'recharts';

const data01 = [
    { name: 'France', value: 400 }, { name: 'Espagne', value: 300 },
];

export default class Example extends Component {

    render() {
        return (
            <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx={200} cy={200} fill="#8884d8" />
                <Legend/>
            </PieChart>
        );
    }
}
