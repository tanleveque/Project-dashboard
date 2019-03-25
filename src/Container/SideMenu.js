import React, { Component } from 'react';
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink, ListGroup, ListGroupItem } from 'reactstrap';

export default class SideMenu extends Component {

    render() {
        return (
            <div className="bg-dark h-100 shadow-lg pl-2 pr-2 rounded" >
                <h1> <Badge color="secondary pl-3 pr-3 mt-3">Dashboard</Badge> </h1>
                <div className=" mt-5 text-center text-white  w-75 d-block ml-auto mr-auto">
                    <ListGroup>
                        <Nav className="pl-1 pr-1">
                            <ListGroupItem>
                                <NavItem >
                                    <NavLink>
                                        <Link to={'/Main'}> Main Page </Link>
                                    </NavLink>
                                </NavItem>
                            </ListGroupItem>
                            <ListGroupItem>
                                <NavItem >
                                    <NavLink >
                                        <Link to={'/Admin'}> Admin Page </Link>
                                    </NavLink>
                                </NavItem>
                            </ListGroupItem>
                        </Nav>
                    </ListGroup>

                </div>

                <div className="mt-5 text-center text-white">
                    <h2>
                        Statistics and numbers in order to bet on football
                    </h2>
                </div>
            </div>
        );
    }
}