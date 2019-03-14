import React, { Component } from 'react';
import { Table } from 'reactstrap';

import '../Container/Main.css';

export default class LastMeetingOverall extends Component {
    render() {

        const { Results } = this.props;

        return (
            <div className="mt-5">
                <h5>{Results.Team}</h5>
                <Table striped>
                    <thead>
                        <tr>    
                            <th>Match</th>
                            <th>Score</th>
                            <th>Position</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Results.Match.map(row => (
                            <tr>
                                <td>{row.Name}</td>
                                <td>{row.Score}</td>
                                <td>{row.Position}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
