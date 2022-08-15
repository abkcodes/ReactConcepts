import React, { Component } from 'react'

export default class ClassBasedState extends Component {
    constructor() {
        super()
      
        this.state = {
          count:0
        }
        this.increment=this.increment.bind(this);
      }

increment(){
    this.setState({
        count:this.state.count+1
    })

}

  render() {
   
    return (
      <div>
          <br/>
          <br/>
        {this.state.count}
      
        <br />
      <button onClick={this.increment}>Click Me</button>
      
      </div>
    )
  }
}
