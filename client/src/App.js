import React, { Component } from 'react';
import NavBlock from './components/NavBlock'
import Details from './components/details';
import Intro from './components/intro';
import Roosts from './components/roosts';
import './App.css';

class App extends Component {
  state = { data: {} }

  // mapBlades(){
  //   return this.state.data.blades.map( (blade, i) => (
  //     <Blade data={blade} key={i} />
  //   ))
  // }

  // componentDidMount() {
  //   axios.get('/data').then( (res) => {
  //     this.setState( {data: res.data} );
  //   });
  // }

  render(){
    let renderBlades = this.state.data.blades ? this.mapBlades() : '';
    return (
      <div className="App Container">
          {/* <NavBlock /> */}
          <h1 id="top">TURKEY DAY IS UPON US!</h1>
          <Intro />
          <Details />
          <Roosts />
      </div>
    );
  }
}

export default App;
