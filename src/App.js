import React, { Component } from 'react';
import './App.scss';
import {getRooms} from './services/roomServices.js';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results : [],
    };

    this.getRoomsInfo ();
  }


  getRoomsInfo () {
    getRooms ()
    .then(data => {
      this.setState({
        results : data.homecards
      });
    });
  }

  render() {

    return (
      <div className="App">
      <ul>
        {this.state.results.map(item =>{
          return (
            <li>
              <div>
                <h2>{item.title}</h2>
                <p>{item.pricePerMonth}</p>
              </div>
            </li>
          );

        })}
      </ul>
      </div>
    );
  }
}
export default App;
