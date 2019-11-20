import React, { Component } from 'react';
import axios from 'axios';
import Blade from './components/blade'
import NavBlock from './components/NavBlock'
import './App.css';

class App extends Component {
  state = { data: {} }

  mapBlades(){
    return this.state.data.blades.map( (blade, i) => (
      <Blade data={blade} key={i} />
    ))
  }

  componentDidMount() {
    axios.get('/data').then( (res) => {
      this.setState( {data: res.data} );
    });
  }

  render(){
    let renderBlades = this.state.data.blades ? this.mapBlades() : '';
    return (
      <div className="App Container">
          <NavBlock links={this.state.data.blades} />
          {renderBlades}
      </div>
    );
  }
}

export default App;
