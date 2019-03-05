import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';

const CardProms =
    [
        {
            title: "Men",
            percentage: 90,
            strokeWidth: 12,
            strokeColor: '#8884D8',
            textColor: '#8884D8',
        },
        {
            title: "Women",
            percentage: 33,
            strokeWidth: 12,
            strokeColor: '#F5D7CD',
            textColor: '#F5D7CD',
        },
        {
            title: "Victory",
            percentage: 15,
            strokeWidth: 12,
            strokeColor: '#6495A3',
            textColor: '#6495A3',
        },
        {
            title: "Defeat",
            percentage: 66,
            strokeWidth: 12,
            strokeColor: '#AFCDCB',
            textColor: '#AFCDCB',
        },
        
    ]

export default class CircularBarGrid extends Component {
    render() {
        return (
            <Row>

                {CardProms.map(s => (
                    <Col lg="3">
                        <Card>
                            <CardHeader> {s.title} </CardHeader>
                            <CardBody>
                                <CircularProgressbar
                                    percentage={s.percentage}
                                    text={`${s.percentage}%`}
                                    strokeWidth={s.strokeWidth}
                                    styles={{
                                        path: {
                                            stroke: s.strokeColor,
                                        },

                                        text: {
                                            // Tweak text color:
                                            fill: s.textColor,
                                        }
                                    }}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                ))
                }

            </Row>

        );
    }
}