import React, {Component} from 'react'
//import _ from 'lodash'

import './style.css'

import Editor from 'draft-js-plugins-editor'
//import createToolbarPlugin from 'draft-js-static-toolbar-plugin'

import 'draft-js-static-toolbar-plugin/lib/plugin.css'
import 'draft-js-undo-plugin/lib/plugin.css'

export default class EntryEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      editorState: this.props.initialEditorState
    }
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
      />
    )
  }
}
