import React, { Component } from 'react';
import { PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'France', value: 90 }, { name: 'Espagne', value: 10 },
];

export default class PiesComponents extends Component {

    render() {
        return (
            <ResponsiveContainer height={300} width="100%" class >
                <PieChart >
                    <Pie data={data} dataKey="value" cx="50%" cy="50%" fill="#8884d8" />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}
