import React, { Component } from 'react'

export default class LifeCycleMethods extends Component {
    constructor(props) {
      super(props)
    console.log("constructor called")
      this.state = {   username:'Ram',address:"pune"}
       this.timer=0
    }

    static getDerivedStateFromProps(props, state)
    {
        console.log("getDerivedStateFromProps called")
            return state
    }
    componentDidMount(){
        console.log("componentDidMount called")
       this.timer = setInterval(()=>{
            console.log("setinterval called")
        },4000)
    }
    changeUsername=()=>{
        console.log("changeUsername called" )
        this.setState({username:'Meera'})
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        return true
    }
    componentDidUpdate(){ console.log("componentDidUpdate called")}
    componentWillUnmount(){console.log("ccomponentWillUnmount called")
        clearInterval(this.timer)
    }
  render() {
    console.log("render called")
    return (
     <>
    <h1>{this.state.username}</h1>
    <button type="button" class="btn btn-primary" onClick={this.changeUsername}>  Get Value </button>
       
     </>
    )
  }
}
