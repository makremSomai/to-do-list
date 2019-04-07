import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Addlist} from './Action';

class Input extends Component {
  render() {
    return (
      <div className="input">
        <input placeholder='What To Do Next...' type='search' onChange={(e)=> this.props.Addlist(e.target.value)}></input>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    list: state.list
    

  }
}

const mapDispatchToProps = dispatch =>{
  return{
      Addlist : list => dispatch(Addlist(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
