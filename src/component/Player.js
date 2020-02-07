import React from 'react';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
    render() {
        return (
            <div>
                <h5>{this.props.name}</h5>
            </div>
        );
    }
}

Player.propTypes = {
    name: PropTypes.string.isRequired
}

Player.defaultProps = {
    name: "Props not passed"
}