import React, {Component} from 'react'
import {RichUtils} from 'draft-js'
//import './style.css'

import Editor from 'draft-js-plugins-editor'
//import createToolbarPlugin from 'draft-js-static-toolbar-plugin'

export default class EntryEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: this.props.initialEditorState
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if(newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  onChange = (editorState) => {
    if(this.state.editorState !== editorState) {
      this.setState({
        editorState
      }, () => {
        this.props.onChange(editorState)
      })
    }
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange}
        handleKeyCommand={this.handleKeyCommand}
        className="editor"
      />
    )
  }
}
