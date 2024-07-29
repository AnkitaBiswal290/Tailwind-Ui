import React, { Component } from 'react'

 class Car extends Component {
  constructor(){
    super();
    this.state = {name: 'john',
      age: '32',
      eyecolor: 'blue',
      
    }
  }
  render() {
    return (
      <div>
        <h2>Hello there {this.state.name} age of { this.state.age }.</h2>
      </div>
    )
  }
}
export default Car;
