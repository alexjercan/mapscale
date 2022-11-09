import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Simple Scale component
 */
export default class Mapscale extends Component {
    render() {
        const {id, value, width} = this.props;

        const style = {
            "border":"1px",
            "border-color": "grey",
            "border-style": "none solid solid solid",
            "width": `${width}px`,
            "text-align": "center"
        }

        return (
            <div id={id} style={style}>
                Scale: {value}
            </div>
        );
    }
}

Mapscale.defaultProps = {
    width: 100
};

Mapscale.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * The width of the scale component.
     */
     width: PropTypes.number,

};
