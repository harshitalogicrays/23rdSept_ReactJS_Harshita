import React, { Component } from 'react'

export default class UsersList extends Component {
    constructor(props) {
      super(props)
      this.state = { users:[]  } }
    
    // componentDidMount(){ this.getData() }
    getData=async()=>{
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            this.setState({users:data})
        }
        catch(err){console.log(err)}
    }
  render() {
    return (<></>
    //   <div>
    //     <h1>Users Data</h1>
    //     <div class="table-responsive"  >
    //         <table  class="table table-primary"  >
    //             <thead>
    //                 <tr>
    //                     <th scope="col">id</th>
    //                     <th scope="col">name</th>
    //                     <th scope="col">email</th><th>username</th><th>phone</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {this.state.users.length==0 && <tr><td colSpan={5}>No User found</td></tr>}
    //                 {this.state.users.map((user,i)=>
    //                 <tr key={user.id}>
    //                     <td>{user.id}</td>
    //                     <td>{user.name}</td>
    //                     <td>{user.email}</td>
    //                     <td>{user.username}</td>
    //                     <td>{user.phone}</td>
    //                 </tr>
    //                 )}
    //             </tbody>
    //         </table>
    //     </div>
        
    //   </div>
    )
  }
}
