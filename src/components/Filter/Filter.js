import React, { Component } from 'react';

class Filter extends Component {
    render() {
        const {onChange} = this.props;
        return (
            <div>
                <input
                    className="input-container"
                    type="text"
                    
                    placeholder="Madrid"
                    onChange= {onChange}
                />
            </div>
        );
    }
}

export default Filter;