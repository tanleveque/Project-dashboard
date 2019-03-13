import React, { Component } from 'react';
import LastMeetingBtwTeams from '../Components/LastMeetingBtwTeams';
import Odds from '../Components/Odds';
import LastMeetingOverall from '../Components/LastMeetingOverall';
import './Main.css';


export default class Main extends Component {
    render() {
        return (
            <div className="mb-5">
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