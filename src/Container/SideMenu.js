import React, { Component } from 'react';
import './SideMenu.css';
import { Row, Col } from 'reactstrap';
import { Badge } from 'reactstrap';

export default class SideMenu extends Component {

    render() {
        return (
            <body className="side" >
                <h1> <Badge color="secondary">Dashboard</Badge> </h1> 
                <p>nombres</p>
                <p>&</p>
                <p>statistiques</p>
                <p>pour de boites</p>

                <p>Un texte est une série orale ou écrite de mots
                    perçus comme constituant un ensemble cohérent,
                    porteur de sens et utilisant les structures propres
                    à une langue. Un texte n'a pas de longueur
                    déterminée sauf dans le cas de poèmes à forme
                    fixe comme le sonnet ou le haïku</p>

                <p>Un texte est une série orale ou écrite de mots
                perçus comme constituant un ensemble cohérent,
                porteur de sens et utilisant les structures propres
                à une langue. Un texte n'a pas de longueur
                déterminée sauf dans le cas de poèmes à forme
                fixe comme le sonnet ou le haïku</p>
            </body>
        );
    }
}