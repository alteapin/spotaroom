import React, { Component } from 'react';
import './App.scss';
import { getRooms } from './services/roomServices.js';
import RoomList from './components/RoomList/RoomList';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      address: ''
    };

    this.getRoomsInfo();
    this.getUserResearch = this.getUserResearch.bind(this);
  } 

  filterAdress () {
    const filteredResults = this.state.results.filter(item => {
      const address = `${item.title}`;
      
      if (address.toLocaleLowerCase().includes(this.state.address.toLocaleLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    return filteredResults;
  }



  getUserResearch (e) {
    const userAdress = e.currentTarget.value;
    
    this.setState({
      address: userAdress
    });
  }  


  getRoomsInfo() {
    getRooms()
      .then(data => {

        const getUniqueId = data.homecards.map((item, index) => { return {...item, id:index}});
        

        this.setState({
          results: getUniqueId
        });
      });
  }


  render() {
    const filteredResults = this.filterAdress();
    // const results = this.state.results;

    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="main">
          <Filter 
          onChange= {this.getUserResearch} />
          <RoomList
            filteredResults = {filteredResults}
            // results={results}
          />
        </main>
      </div>
    );
  }
}
export default App;
