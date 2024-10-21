import React, { Component } from 'react'

export default class Refdemochidlren extends Component {
    handleClick=()=>alert(this.props.innerRefProp.current.value) 
    render() {
    return (
      <div>
         <button type="button" class="btn btn-primary" 
         onClick={this.handleClick}>Fetch Data</button>
      </div>
    )
  }
}
