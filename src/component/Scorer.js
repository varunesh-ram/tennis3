import React from 'react';
import { Constants } from '../constants/Constants';
import PropTypes from 'prop-types';

export default class Scorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scoreText: Constants.InitialScore };
    }

    componentDidUpdate(prevProps) {
        if (this.isPropsChanged(prevProps))
            this.setState({ scoreText: this.updateScore() });
    }

    isPropsChanged = (prevProps) => {
        return prevProps.player1Score !== this.props.player1Score || prevProps.player2Score !== this.props.player2Score;
    }

    updateScore = () => {
        if (this.props.player1Score === 3)
            return Constants.Player1ScoredThrice;
        if (this.props.player1Score === 2)
            return Constants.Player1ScoredTwice;
        if (this.props.player1Score === 1)
            return Constants.Player1ScoredOnce;
        return Constants.InitialScore;
    }

    render() {
        return (
            <div>
                <h5>{Constants.ScoreHeader}</h5>
                <label>{this.state.scoreText}</label>
            </div>
        );
    }
}

Scorer.propTypes = {
    player1Score: PropTypes.number.isRequired
}

Scorer.defaultProps = {
    player1Score: 0
}