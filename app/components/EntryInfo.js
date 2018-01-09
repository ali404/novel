import React, {Component} from 'react'

import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdClose from 'react-icons/lib/md/close'

import {countWordsOnEditorState} from '../utils'

export default class EntryInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInfoActive: false
    }
  }

  _onClick = (ev) => {
    this.setState({
      isInfoActive: !this.state.isInfoActive
    })
  }

  _deleteEntry = (ev) => {
    this.props.actions.deleteEntry(this.props.id)
    this.props.history.push("/")
  }

  render() {
    let icon = this.state.isInfoActive ? <MdClose /> : <MdInfoOutline />

    if(this.props.entry) {
      return (
        <div className="info" data-active={this.state.isInfoActive}>
          <div className="info-icon" onClick={this._onClick}>{icon}</div>
          <div className="info-data" data-active={this.state.isInfoActive}>
            Entry title: {this.props.entry.title} <br />
            Word count: {countWordsOnEditorState(this.props.entry.state)} <br />
            {/* Date created: {this.props.entry.dateCreated} <br /> */}
          </div>
          <button
            className="info-delete"
            data-active={this.state.isInfoActive}
            onClick={this._deleteEntry}
          >
            Delete Entry
          </button>
        </div>
      )
    }
    else {
      return (
        <div>Not found</div>
      )
    }
  }
}
