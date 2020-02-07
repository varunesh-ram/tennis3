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
        const { player1Score, player2Score } = this.props;

        if (player1Score === 0 && player2Score === 3)
            return Constants.Player2ScoredThrice;
        if (player1Score === 0 && player2Score === 2)
            return Constants.Player2ScoredTwice;
        if (player1Score === 0 && player2Score === 1)
            return Constants.Player2ScoredOnce;
        if (player1Score <= 3 && player2Score === 0)
            return Constants.ScoreLookup[player1Score] + Constants.Comma_Love;
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
    player1Score: PropTypes.number.isRequired,
    player2Score: PropTypes.number.isRequired
}

Scorer.defaultProps = {
    player1Score: 0,
    player2Score: 0
}