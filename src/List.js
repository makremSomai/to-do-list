import React, { Component } from 'react';
import Delete from './Delete';
import './list.css'
class List extends Component {
  render() {
    return (
      <div className="list">
      <ol>
       <li>aa</li><Delete/>   
      </ol>
      
      </div>
    );
  }
}

export default List;
