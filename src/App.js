import React, { Component } from 'react';
import './App.scss';
import { getRooms } from './services/roomServices.js';
import RoomList from './components/RoomList/RoomList';
import Header from './components/Header/Header';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };

    this.getRoomsInfo();
  }


  getRoomsInfo() {
    getRooms()
      .then(data => {
        this.setState({
          results: data.homecards
        });
      });
  }


  render() {

    const results = this.state.results;

    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="main">
          <RoomList
            results={results}
          />
        </main>
      </div>
    );
  }
}
export default App;
