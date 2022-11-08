import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Simple Scale component
 */
export default class Mapscale extends Component {
    render() {
        const {id, value} = this.props;

        return (
            <div id={id}>
                Scale: {value};
         
            </div>
        );
    }
}

Mapscale.defaultProps = {};

Mapscale.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

};
