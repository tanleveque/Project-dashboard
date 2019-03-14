import React, { Component } from 'react';
import LastMeetingBtwTeam from '../Components/LastMeetingBtwTeam';
import LastMeetingOverall from '../Components/LastMeetingOverall';
import Odds from '../Components/Odds';
import Position from '../Components/Position';
import './Main.css';


export default class Main extends Component {
    render() {
        return (
            <div className="mb-5">
                <div>
                    <h1 className="text-white font-weight-bold " >Comparison PSG - Marseille</h1>
                </div>
                <Odds />
                <Position/>
                <LastMeetingBtwTeam />
                <LastMeetingOverall />
            </div>
        );
    }
}