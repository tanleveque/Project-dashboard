import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const series =
    [
        {
            serie: "serie 1",
            data: [
                { name: '1950', France: 400, Espagne: 77, amt: 2400 },
                { name: '1960', France: 100, Espagne: 150, amt: 2400 },
                { name: '1970', France: 900, Espagne: 1100, amt: 2400 },
                { name: '1980', France: 600, Espagne: 650, amt: 2400 },
                { name: '1990', France: 800, Espagne: 400, amt: 2400 },
            ]
        },
        {
            serie: "serie 2",
            data: [
                { name: '1950', France: 100, Espagne: 77, amt: 2400 },
                { name: '1960', France: 300, Espagne: 150, amt: 2400 },
                { name: '1970', France: 150, Espagne: 100, amt: 2400 },
                { name: '1980', France: 600, Espagne: 650, amt: 2400 },
                { name: '1990', France: 100, Espagne: 80, amt: 2400 },
            ]
        },
    ];

export default class ChartComponents extends Component {
    render() {
        return (

            series.map(s => (
                <ResponsiveContainer height={400}>
                    <LineChart
                        height={200}
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
                        <Line type="monotone" dataKey="Espagne" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            ))
        );
    }
}