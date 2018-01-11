import React, {Component} from 'react'
import {RichUtils, convertToRaw} from 'draft-js'
import _ from 'lodash'

import Editor from 'draft-js-plugins-editor'
//import createToolbarPlugin from 'draft-js-static-toolbar-plugin'
import MdDelete from 'react-icons/lib/md/delete'

import {Info, Title, ActionableIcon} from './style'

export default class NoteEditor extends Component {
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
    let lastState = editorState
    this.setState({
      editorState
    }, () => {
      if(_.isEqual(
          convertToRaw(lastState.getCurrentContent()),
          convertToRaw(editorState.getCurrentContent())
        )
      ) {
        this.props.onChange(editorState)
      }
    })
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          className="editor"
        />
        {this.props.settings.infoOpen ? (
          <Info>
            <Title>Note Settings</Title>
            <ActionableIcon onClick={ev => {
              this.props.actions.deleteEntry(this.props.entry.id)
            }}>
              <MdDelete />
            </ActionableIcon>
          </Info>
        ) : null}
      </div>
    )
  }
}