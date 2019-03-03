import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Card, CardBody, CardHeader} from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';



export default class CircularBarGrid extends Component {
    render() {
        return (

            <Row>
                <Col lg="3">
                    <Card>
                    <CardHeader> Men </CardHeader>
                        <CardBody>
                            <CircularProgressbar
                                percentage={90}
                                text={`${90}%`}
                                strokeWidth={12}
                                styles={{
                                    path: {
                                        stroke: '#8884D8',
                                    },

                                    text: {
                                        // Tweak text color:
                                        fill: '#8884D8',
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
                
                <Col lg="3">
                    <Card>
                    <CardHeader>Women</CardHeader>
                        <CardBody>
                            <CircularProgressbar
                                percentage={33}
                                text={`${33}%`}
                                strokeWidth={12}
                                styles={{
                                    path: {
                                        stroke: '#F5D7CD',
                                    },

                                    text: {
                                        // Tweak text color:
                                        fill: '#F5D7CD',
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="3">
                    <Card>
                    <CardHeader>Victory</CardHeader>
                        <CardBody>
                            <CircularProgressbar
                                percentage={15}
                                text={`${15}%`}
                                strokeWidth={12}
                                styles={{
                                    path: {
                                        stroke: '#6495A3',
                                    },

                                    text: {
                                        // Tweak text color:
                                        fill: '#6495A3',
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>

                <Col lg="3">
                    <Card>
                    <CardHeader>Defeat</CardHeader>
                        <CardBody>
                            <CircularProgressbar
                                percentage={66}
                                text={`${66}%`}
                                strokeWidth={12}
                                styles={{
                                    path: {
                                        stroke: '#AFCDCB',
                                    },

                                    text: {
                                        // Tweak text color:
                                        fill: '#AFCDCB',
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        );
    }
}