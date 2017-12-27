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
          onChange={ev => {
            this.setState({
              name: ev.target.value
            })
          }}
        />
        <button
          onClick={ev => {
            if(this.state.name.length !== 0) {
              this.props.actions.addNotebook(
                this.state.name,
                uuidv4(),
                new Date()
              )
            }
          }}
        >
          Add {this.props.entityName}
        </button>
      </div>
    )
  }
}
