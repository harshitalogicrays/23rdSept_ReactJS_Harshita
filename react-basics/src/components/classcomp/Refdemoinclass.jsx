import React, { Component, createRef } from 'react'
import Refdemochidlren from './Refdemochidlren'
import ForwardRefDemo from './forwardRefDemo'

export default class Refdemoinclass extends Component {
    constructor(props) {
      super(props)
      this.state = { username:'' }
      this.myRef = React.createRef()
      this.innerRef = createRef()
      this.ref1 = createRef()
    }
    handleClick=()=>{
        alert(this.state.username)
    }
    handleClick1=()=>alert(this.myRef.current.value)

    componentDidMount(){
        this.myRef.current.focus()
    }

  render() {
    console.log("render called")
    return (
        <>
      {/* <div className='input-group'>
        <input type="text" className='form-control' value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} />
        <button type="button" class="btn btn-primary" onClick={this.handleClick} >
            Fetch Data
        </button>
      </div> */}

<div className='input-group'>
        <input type="text" className='form-control' ref={this.myRef} />
        <button type="button" class="btn btn-primary" onClick={this.handleClick1} >
            Fetch Data
        </button>
      </div>
        <hr/>
      <div className='input-group'>
        <input type="text" className='form-control' ref={this.innerRef} />
       <Refdemochidlren name="Jimit" innerRefProp={this.innerRef}/>  </div>
       {/* innerRefProp -  props (holds innerRef) */}
       <hr/>
        <hr/>
       <ForwardRefDemo name="Jimit" ref={this.ref1}/>
       {/* ref -  reference only   */}
    
      </>
    )
  }
}
