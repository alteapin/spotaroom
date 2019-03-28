import React, { Component } from 'react';
import './App.scss';
import { getRooms } from './services/roomServices.js';
import RoomList from './components/RoomList/RoomList';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import Price from './components/Price/Price';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      address: '',
      price: ''
    };

    this.getRoomsInfo();
    this.getUserPrice = this.getUserPrice.bind(this);
    this.getUserResearch = this.getUserResearch.bind(this);
  } 


  filterAddress (sortedPrice) {
    const filteredResults = sortedPrice.filter(item => {
      const address = item.title;
      
      if (address.toLocaleLowerCase().includes(this.state.address.toLocaleLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    return filteredResults;
  }

  orderPrice () {
    const sortedPrice = this.state.results.sort((a, b) => {
      if (this.state.price === 'asc') {
        return (a.pricePerMonth > b.pricePerMonth ? 1 : -1)
      } else {
        return (a.pricePerMonth < b.pricePerMonth ? 1 : -1);
      }
    });
    return sortedPrice;

  }


  getUserResearch (e) {
    const userAddress = e.currentTarget.value;
    
    this.setState({
      address: userAddress
    });
  }  

  getUserPrice (e) {
    const userPrice = e.currentTarget.value;
    
    this.setState({
      price: userPrice
    });
  }


  getRoomsInfo() {
    getRooms()
      .then(data => {

        const getUniqueId = data.homecards.map((item, index) => {return {...item, id:index}});
        
        this.setState({
          results: getUniqueId
        });
      });
  }


  render() {
    const sorteredPrice = this.orderPrice();
    const filteredResults = this.filterAddress(sorteredPrice);
    const {address} = this.state;
    

    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main className="main">
          <Filter 
          onChange= {this.getUserResearch} />
          <Price 
          onChange ={this.getUserPrice}/>
          <RoomList
            filteredResults = {filteredResults}
            address = {address}
          />
        </main>
      </div>
    );
  }
}
export default App;
