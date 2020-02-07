import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
                <button onClick={this.props.onBallWin} >{Constants.PlayerButtonText}</button>
            </div>
        );
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    onBallWin: PropTypes.func
}

Player.defaultProps = {
    name: "Props not passed"
}