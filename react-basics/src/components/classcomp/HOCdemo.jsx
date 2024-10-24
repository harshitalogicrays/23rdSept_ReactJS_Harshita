import React, { Component } from 'react'
import HOCLogic from './HOCLogic'


const Users = HOCLogic ({url:"https://jsonplaceholder.typicode.com/users",columns:["id","name","email","username","phone"],heading:"Users List"})

const Posts = HOCLogic ({url:"https://jsonplaceholder.typicode.com/posts",columns:["id","userId","title","body"],heading:"Post data"})

export default class HOCdemo extends Component {
  render() {
    return (
      <div>
        <Users/>
        <Posts/>
      </div>
    )
  }
}
