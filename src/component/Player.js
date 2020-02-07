import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {

    onBallWin = player => {
        this.props.onBallWin(player);
    }

    render() {
        if (!this.props.isGameOver)
            return (
                <div>
                    <h5>{this.props.name}</h5>
                    <button onClick={e => this.onBallWin(this.props.name)} >{Constants.PlayerButtonText}</button>
                </div>
            );
        return (<h5>{this.props.name}</h5>);
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    onBallWin: PropTypes.func,
    isGameOver: PropTypes.bool.isRequired
}

Player.defaultProps = {
    name: "Props not passed",
    isGameOver: true
}