import React, { Component } from 'react';
import LastMeetingBtwTeams from '../components/LastMeetingBtwTeams';
import Odds from '../components/Odds';
import LastMeetingOverall from '../components/LastMeetingOverall';
import { Row, Col } from 'reactstrap';
import './Main.css';



export default class Main extends Component {
    render() {
        return (
            <div className="bg-main">
                <div>
                    <h3>Comparison PSG - Marseille</h3>
                </div>

                <Odds />

                <LastMeetingBtwTeams/>

                <LastMeetingOverall/>
            </div>
        );
    }
}