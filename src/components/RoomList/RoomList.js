import React, { Component } from 'react';
import './RoomList.scss';
import RoomDetail from '../RoomDetail/RoomDetail';


class RoomList extends Component {
  render() {
    const { filteredResults } = this.props;

    return (
      <div>
        <ul className="room-list">
          {filteredResults.map(item => {
            return (
              <li key={item.id}>
                <RoomDetail
                  item={item} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}



export default RoomList;

