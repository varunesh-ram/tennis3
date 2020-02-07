import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import { Constants } from '../constants/Constants';

export default class TennisGame extends React.Component {
    render() {
        return (
            <div>
                <div className="playerContainer">
                    <div className="leftContainer">
                        <Player name={Constants.Player1Name} />
                    </div>
                    <Player name={Constants.Player2Name} />
                </div>
                <Scorer />
            </div>);
    }
}