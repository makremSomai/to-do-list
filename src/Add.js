import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Addlist} from './Action';

class Add extends Component {
    
  render() {
      console.log(this.state)
    return (
      <div className="btnAdd">
        <button onClick={() =>{ this.props.Addlist(this.props.list)}}> Add to your list </button>
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
// const mapDispatchToProps = {
//     Addlist: list
// }


export default connect(mapStateToProps, mapDispatchToProps)(Add);
