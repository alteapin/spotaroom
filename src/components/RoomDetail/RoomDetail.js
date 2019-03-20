import React, { Component } from 'react';
import './RoomDetail.scss';
import PropTypes from 'prop-types';

class RoomDetail extends Component {

    render() {

        const { item } = this.props

        return (
            <div className="room-detail_container">
                <img className="room-image"
                    src={item.photoUrls.homecardHidpi} alt={item.title} />

                <div className="room-detail_description">
                    <h2 className="room-title">{item.title}</h2>
                    <p className="room-price">{item.pricePerMonth}€</p>
                    <button className="room-info_button" type="submit">More Details</button> 
                    <button className="room-book_button" type="submit">Book now !</button>                                   
                </div>
                
            </div>
        );
    }
}

RoomDetail.propTypes = {
    item: PropTypes.object.isRequired
}



export default RoomDetail;