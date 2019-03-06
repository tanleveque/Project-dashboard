import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Progress } from 'reactstrap';

import '../Container/Main.css';


export default class ProgressBar extends Component {
    render() {
        return (
            <div>
                <Card className="card-box">
                    <CardHeader>% Possession</CardHeader>
                    <CardBody>
                        <Progress multi>
                            <Progress bar value="40">France   40%</Progress>
                            <Progress bar color="success" value="60">Belgique   60%</Progress>
                        </Progress>
                        
                    </CardBody>
                </Card>

            </div>
        );
    }
}