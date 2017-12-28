import React, {Component} from 'react'

import EntryTitle from './EntryTitle'
import EntryEditor from './EntryEditor'

import {EditorState, convertFromRaw, convertToRaw} from 'draft-js'

export default class Entry extends Component {
  constructor(props) {
    super(props)

    if(this.props.entry) {
      this.state = this._setState(this.props)
    }
  }

  _setState(props) {
    const setEditorState = (editorState) => {
      if(editorState === "") {
        return EditorState.createEmpty()
      }
      else {
        return EditorState.createWithContent(convertFromRaw(editorState))
      }
    }

    if(props.entry) {
      return {
        title: props.entry.title,
        initialEditorState: setEditorState(props.entry.state)
      }
    }
    else {
      return {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._setState(nextProps))
  }

  _saveTitle = (title) => {
    this.props.actions.updateEntryTitle(
      this.props.entry.id,
      title
    )

    this.setState({title})
  }

  _saveEditorState = (editorState) => {
    this.props.actions.updateEntryState(
      this.props.entry.id,
      convertToRaw(editorState.getCurrentContent())
    )
  }

  render() {
    let returned

    if(!this.props.entry) {
      returned = (
        <div>No entry found with the match: {this.props.id}</div>
      )
    }
    else {
      returned = (
        <div>
          <EntryTitle
            onChange={this._saveTitle}
            title={this.state.title}
          />
          <EntryEditor
            onChange={this._saveEditorState}
            initialEditorState={this.state.initialEditorState}
          />
        </div>
      )
    }


    return (
      <div>{returned}</div>
    )
  }
}
