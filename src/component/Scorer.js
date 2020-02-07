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

        if (player1Score >= 4 && this.isPlayer1TwoOrMorePointsGreaterThanPlayer2())
            return Constants.Player1WinnerText;
        if (this.hasAdvantage())
            return Constants.AdvantageText + this.playerWithHighestScore();
        if (this.isDeuce())
            return Constants.Deuce;
        if (this.isBothPlayersScoredEqual())
            return this.sameScore();
        if (player1Score <= 3 && player2Score <= 3)
            return this.getScoreFromLookUp();
        return Constants.InitialScore;
    }

    isPlayer1TwoOrMorePointsGreaterThanPlayer2 = () => {
        return this.props.player1Score >= this.props.player2Score + 2
    }

    hasAdvantage = () => {
        const { player1Score, player2Score } = this.props;

        if (player1Score >= 4 && this.isPlayer1OnePointGreaterThanPlayer2())
            return true;
        if (player2Score >= 4 && this.isPlayer2OnePointGreaterThanPlayer1())
            return true;
        return false;
    }

    playerWithHighestScore = () => {
        if (this.props.player1Score > this.props.player2Score) {
            return Constants.Player1Name;
        } else {
            return Constants.Player2Name;
        }
    }

    isPlayer2OnePointGreaterThanPlayer1 = () => {
        return this.props.player2Score === this.props.player1Score + 1;
    }

    isPlayer1OnePointGreaterThanPlayer2 = () => {
        return this.props.player1Score === this.props.player2Score + 1;
    }

    isDeuce = () => {
        return this.isBothPlayersScoredEqual() && this.props.player1Score >= 3;
    }

    isBothPlayersScoredEqual = () => {
        return this.props.player1Score === this.props.player2Score;
    }

    sameScore = () => {
        return Constants.ScoreLookup[this.props.player1Score] + Constants.All;
    }

    getScoreFromLookUp = () => {
        const { player1Score, player2Score } = this.props;
        return Constants.ScoreLookup[player1Score] + Constants.Comma + Constants.ScoreLookup[player2Score];
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