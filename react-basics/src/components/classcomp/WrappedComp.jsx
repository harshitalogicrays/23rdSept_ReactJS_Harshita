import React, { Component } from 'react'

export default class WrappedComp extends Component {

  render() {    console.log(this.props)
    return (
        <div>
        <h1>{this.props.Inputdata.heading}</h1>
        <div class="table-responsive"  >
            <table  class="table table-primary"  >
                <thead> <tr>
                  {this.props.Inputdata.columns.map((c,i)=><th key={i}>{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                    {this.props.data.length==0 && <tr><td colSpan={this.props.Inputdata.columns.length}>No data found</td></tr>}
                    {this.props.data.map((item,i)=>
                    <tr key={i}>
                          {this.props.Inputdata.columns.map((c,i)=><td key={i}>{item[c]}</td>)}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        
      </div>
    )
  }
}
