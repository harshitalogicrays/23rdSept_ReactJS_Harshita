import React, { Component, PureComponent } from 'react'

export default class PureCompDemo extends PureComponent { //rpc
    constructor(props) {
      super(props)
      this.state = {   username:'Ram' }
    }
    changeUsername=()=>{
        console.log("changeUsername called" )
        this.setState({username:'Meera'})
    }
  render() {
    console.log("render called")
    return (
      <div>
        <button type="button" class="btn btn-primary" onClick={this.changeUsername}>  Get Value </button>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
