import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import List from './List';
import Add from './Add';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="NavBar">
      <Input />
      <Add />
      </div>
      <div className="to_do_list">
      <List/>
      </div>
      </div>
    );
  }
}

export default App;
