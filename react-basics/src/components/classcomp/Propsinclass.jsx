import React, { Component } from 'react'

export default class Propsinclass extends Component {
  render() {
    let {username} = this.props //destructure
    return (
      <div>
        props demo<br/>
        {username}<br/>
        <h1>{this.props.address}</h1>
        {this.props?.children}
      </div>
    )
  }
}

Propsinclass.defaultProps={
  address:"Ahmedabad",
  username:"Happy Singh"
}