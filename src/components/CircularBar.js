import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

export default class CircularBar extends Component {

    render() {
        return (
            <CircularProgressbar
                percentage={percentage}
                text={`${percentage}%`}
                strokeWidth={12}
                
            />
        );
    }
}