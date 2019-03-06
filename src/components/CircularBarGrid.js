import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Card, CardBody, CardHeader,Row, Col} from 'reactstrap';

import 'react-circular-progressbar/dist/styles.css';
import '../Container/Main.css';

const CardProms =
    [
                {
            title: "% Précision des passes France",
            percentage: 83,
            strokeWidth: 12,
            strokeColor: '#6495A3',
            textColor: '#6495A3',
        },
        {
            title: "% Précision des passes Belgique",
            percentage: 91,
            strokeWidth: 12,
            strokeColor: '#AFCDCB',
            textColor: '#AFCDCB',
        },
        {
            title: "% Justesse passe France",
            percentage: 86,
            strokeWidth: 12,
            strokeColor: '#6495A3',
            textColor: '#6495A3',
        },
        {
            title: "% Justesse passe Belgique",
            percentage: 90,
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
                        <Card className="card-box">
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