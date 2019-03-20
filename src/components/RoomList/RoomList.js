import React, { Component } from 'react';
import './RoomList.scss';
import RoomDetail from '../RoomDetail/RoomDetail';

class RoomList extends Component {
  render() {
    const { results } = this.props;

    return (
      <div>
        <ul className="room-list">
          {results.map(item => {
            return (
              <li>
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

