import React, { Component } from 'react';

class ClassComponentStatesWithArrorFunction extends Component {
constructor() {
  super()

  this.state = {
     count:0
  }
}
    render() {
        return (
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={()=>this.setState({count:this.state.count+1})}>Increment With Arrow</button>
              <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement With Arrow</button> 
            </div>
        );
    }
}

export default ClassComponentStatesWithArrorFunction;