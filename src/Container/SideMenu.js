import React, { Component } from 'react';
import './SideMenu.css';
import { Badge } from 'reactstrap';

export default class SideMenu extends Component {

    render() {
        return (
            <div className="side" >
                <h1> <Badge color="secondary">Dashboard</Badge> </h1> 
                <p>Nombres</p>
                <p>&</p>
                <p>Statistiques</p>
                <p>Pour</p>
                <p>L'alléchante demi-finale du Mondial 2018 entre l'équipe de France et la Belgique </p>

                <p>Une nouvelle Marseillaise pour relancer la célébration des supporters : 
                    sur les Champs, l'avenue est bondée - et bien encadrée par les forces de 
                    l'ordre. La circulation est bloquée également autour de l'Arc de Triomphe. 
                    "Je n'y crois pas !" , lance Fred, jeune supporter étonné de voir un tel 
                    rassemblement pour la victoire des bleus. Partout, la joie ne semble pas 
                    retomber, plus d'une heure après la fin de la rencontre.
                    Une foule ininterrompue continue de monter les Champ-Elysée. Les chants s'alternent, 
                    de "Umtiti" répété en boucle en hommage au buteur du soir, au classique
                     mais efficace "On est en finale !" 
                     Dans la foule, on se moque aussi très gentiment d'Olivier Giroud : "Ce soir, 
                     il a mis sa chaussure droite sur le pied gauche, et l'inverse !" rigole Patrick, 
                     devant le cortège montant vers l'Arc de Triomphe. "One, two, three, viva Umtiti" 
                     prend le dessus dans les rangs, la liesse ne semble pas vouloir s'arrêter.</p>
            </div>
        );
    }
}