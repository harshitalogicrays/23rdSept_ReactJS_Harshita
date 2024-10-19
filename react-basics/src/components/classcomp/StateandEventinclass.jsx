import React, { Component } from 'react'

export default class StateandEventinclass extends Component {
  constructor(props) {
    super(props)
    this.state = {num1:10,num2:2,result:''}
  }
  
  handleClick=()=>alert("handleClick called")
  handleAdd=()=>{
    this.setState({result:this.state.num1+this.state.num2})
  }
  render() {
    return (
      <>
      <h1>State and Event Demo</h1>
      <button  type="button" class="btn btn-primary me-2" 
      onClick={()=>{alert("button clicked")  }
      }>Click  Me</button>

  <button  type="button" class="btn btn-primary me-2" 
      onClick={this.handleClick}>Handle Click</button>

    <button  type="button" class="btn btn-primary me-2" 
      onClick={this.handleAdd}>Add</button>
      <h1>{this.state.result}</h1>
  </>

  
    )
  }
}
