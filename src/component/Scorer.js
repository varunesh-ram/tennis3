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

        if (this.hasWinner()) {
            this.props.isGameOver();
            return this.playerWithHighestScore() + Constants.WinnerText;
        }
        if (this.hasAdvantage())
            return Constants.AdvantageText + this.playerWithHighestScore();
        if (this.isDeuce())
            return Constants.Deuce;
        if (this.isBothPlayersScoredEqual())
            return this.sameScore();
        return this.getScoreFromLookUp();
    }

    hasWinner = () => {
        const player1Score = this.props.player1Score, player2Score = this.props.player2Score;
        if (player1Score >= 4 && this.isPlayer1TwoOrMorePointsGreaterThanPlayer2())
            return true;
        if (player2Score >= 4 && this.isPlayer2TwoOrMorePointsGreaterThanPlayer1())
            return true;
        return false;
    }

    isPlayer1TwoOrMorePointsGreaterThanPlayer2 = () => {
        return this.props.player1Score >= this.props.player2Score + 2
    }

    isPlayer2TwoOrMorePointsGreaterThanPlayer1 = () => {
        return this.props.player2Score >= this.props.player1Score + 2
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
    player2Score: PropTypes.number.isRequired,
    isGameOver: PropTypes.func
}

Scorer.defaultProps = {
    player1Score: 0,
    player2Score: 0
}