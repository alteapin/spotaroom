import React, { Component } from 'react';
import './Filter.scss';
import PropTypes from 'prop-types';

class Filter extends Component {
    render() {
        const { onChange, address } = this.props;
        return (
            <div className="input_container">
                <input
                    className="input-address"
                    type="text"
                    value={address}
                    placeholder="📍 Madrid"
                    onChange={onChange}
                />
            </div>
        );
    }
}

Filter.propTypes= {
    onChangeAction: PropTypes.func
}

export default Filter;