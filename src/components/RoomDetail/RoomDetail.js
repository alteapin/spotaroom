import React, { Component } from 'react';
import './RoomDetail.scss'

class RoomDetail extends Component {

    render() {

        const { item } = this.props

        return (
            <div className="room-detail_container">
                <img className="room-image"
                src={item.photoUrls.homecardHidpi} alt={item.title} />
                <p className="room-title">{item.pricePerMonth}€/mes</p>
                <h2>{item.title}</h2>
            </div>
        );
    }
}

export default RoomDetail;