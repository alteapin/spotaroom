import React, { Component } from 'react';

class Price extends Component {

    render() { 
        const {onChange} = this.props;
        return ( 
            <div>
                <select onChange={onChange}>
                    <option value="asc">De más barato a más caro</option>
                    <option value="ds">De más caro a más barato</option>
                </select>
            </div>
        );
    }
}

export default Price;