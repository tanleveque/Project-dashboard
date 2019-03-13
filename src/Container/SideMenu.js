import React, { Component } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink, Card, CardBody, Row } from 'reactstrap';

export default class SideMenu extends Component {

    render() {
        return (
            <div className="bg-dark w-100 shadow-lg pl-3 pr-3 mb-5 rounded" >
                <h1> <Badge color="secondary pl-3 pr-3">Dashboard</Badge> </h1>
                <div className=" mt-5 pl-3 pr-3 text-center text-white">
                    <Nav >
                        <Card className="bg-light" >
                            <CardBody>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={'/Main'}> Main Page </Link>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>
                                            <Link to={'/Admin'}> Admin Page </Link>
                                        </NavLink>
                                    </NavItem>
                            </CardBody>
                        </Card>     
                    </Nav>
                    
                </div>

                <div className="mt-5 text-center text-white">
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