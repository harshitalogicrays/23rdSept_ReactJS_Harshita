import React, { Component } from 'react'
import WrappedComp from './WrappedComp'

const HOCLogic = (Inputdata) => {
  return class extends Component{
    constructor(props) {super(props)
        this.state = { data:[],input:Inputdata  } }
    componentDidMount(){ this.getData() }
      getData=async()=>{
          try{
              const res = await fetch(`${Inputdata.url}`)
              const data1 = await res.json()
              console.log(data1)
              this.setState({data:data1,input:Inputdata})  }
          catch(err){console.log(err)} }
    render(){
        return(
            <WrappedComp data ={this.state.data} Inputdata={this.state.input}/>
         
        )
    }
   }
}

export default HOCLogic
