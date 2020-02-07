import React from 'react';
import { Constants } from '../constants/Constants';

export default class Scorer extends React.Component {
    render() {
        return (
            <div>
                <h5>{Constants.ScoreHeader}</h5>
                <label>{Constants.InitialScore}</label>
            </div>
        );
    }
}