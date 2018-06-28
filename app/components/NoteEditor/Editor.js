import React, {Component} from 'react'
import {RichUtils} from 'draft-js'

import DraftEditor from 'draft-js-plugins-editor'

export default class Editor extends Component {

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if(newState) {
      this.props.onChange(newState)
      return 'handled'
    }
    
    return 'not-handled'
  }

  render() {
    return <DraftEditor
      onChange={this.props.onChange}
      editorState={this.props.editorState}
      handleKeyCommand={this._handleKeyCommand}
      className="editor"
    />
  }
}