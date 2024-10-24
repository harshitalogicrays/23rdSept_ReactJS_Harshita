import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hasError:false,errormsg:''
      }
    }
    static getDerivedStateFromError(error){
        return {hasError:true,errormsg:error.message}
    }
    componentDidCatch(error,errorInfo){
        console.log(error)
        console.log(errorInfo)
    }
  render() {
    if(this.state.hasError){
        return (<h1>{this.state.errormsg}</h1>)
    }
    else{
        return this.props.children
    } 
  
  }
}
