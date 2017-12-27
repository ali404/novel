import React, {Component} from 'react'
import uuidv4 from 'uuid/v4'

import './style.css'

export default class AddEntity extends Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <input
          type="text"
          value={this.state.name}
          onChange={ev => {
            this.setState({
              name: ev.target.value
            })
          }}
        />
        <button
          onClick={ev => {
            if(this.state.name.length !== 0) {
              let func = "add" + this.props.entityName
              this.props.actions[func](
                this.state.name,
                uuidv4(),
                new Date()
              )

              this.setState({
                name: ""
              })
            }
          }}
        >
          Add {this.props.entityName}
        </button>
      </div>
    )
  }
}
