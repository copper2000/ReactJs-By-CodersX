import React, { Component } from 'react';
// import './App.css'
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Toyota">
          Demo children lesson
        </Accordion>
      </div>
    );
  }
}

export default App;
