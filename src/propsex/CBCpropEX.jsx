import React, { Component } from 'react'

export default class CBCpropEX extends Component {
  render() {
    console.log(this)
    return (
      <div>CBCpropEX

        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
          this.props.hobbies.map(hobby=>{
            return <li>{hobby}</li>
          })
        }

        <h1>{this.props.address.city}</h1>
        <h2>{this.props.address.area}</h2>
        <button onClick={this.props.sendFun}>Click</button>
      </div>
    )
  }
}
