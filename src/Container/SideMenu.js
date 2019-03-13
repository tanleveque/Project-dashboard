import React, { Component } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink } from 'reactstrap';

export default class SideMenu extends Component {

    render() {
        return (
            <div className="side" >
                <h1> <Badge color="secondary">Dashboard</Badge> </h1>
                <div>
                    <p>List Based</p>

                    <Nav vertical>
                        <NavItem>
                            <NavLink>
                                <Link to={'/Main'}> Main </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink>
                                <Link to={'/Admin'}> Admin </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <hr />
                </div>

                <div>
                    <p>Nombres</p>
                    <p>&</p>
                    <p>Statistiques</p>
                    <p>Pour</p>
                    <p>L'alléchante demi-finale du Mondial 2018 entre l'équipe de France et la Belgique </p>

                    <p>Une nouvelle Marseillaise pour relancer la célébration des supporters :
                        sur les Champs, l'avenue est bondée - et bien encadrée par les forces de
                        l'ordre. La circulation est bloquée également autour de l'Arc de Triomphe.
                    </p>
                </div>
            </div>
        );
    }
}