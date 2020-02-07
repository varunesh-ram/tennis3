import React from 'react';
import Player from './Player';
import Scorer from './Scorer';
import { Constants } from '../constants/Constants';

export default class TennisGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1Score: 0
        }
    }

    incrementScore = () => {
        this.setState((prevState, props) => ({ player1Score: prevState.player1Score + 1 }));
    }

    render() {
        return (
            <div>
                <div className="playerContainer">
                    <div className="leftContainer">
                        <Player name={Constants.Player1Name} onBallWin={this.incrementScore} />
                    </div>
                    <Player name={Constants.Player2Name} />
                </div>
                <Scorer player1Score={this.state.player1Score} />
            </div>);
    }
}