import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
    };
  }

  componentDidMount() {
    fetch('api/homecards')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}
export default App;
