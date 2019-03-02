import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Card, CardBody, } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

export default class CircularBar extends Component {

    render() {
        return (
           
                <Row>
                    <Col lg="3">   
                        <Card>
                            <CardBody>
                                <CircularProgressbar
                                    percentage={percentage}
                                    text={`${percentage}%`}
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
                </Row>
            
        );
    }
}