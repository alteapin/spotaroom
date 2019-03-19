import React, { Component } from 'react';
import './RoomDetail.scss'

class RoomDetail extends Component {

    render() {

        const { item } = this.props
        
        return (
            <div>
                <h2>{item.title}</h2>
                <p>{item.pricePerMonth}</p>
                <img src={item.photoUrls.homecardHidpi} alt={item.title} />
            </div>
        );
    }
}

export default RoomDetail;