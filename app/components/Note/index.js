import React, {Component} from 'react'
import _ from 'lodash'

import NoteTitle from './NoteTitle'
import NoteEditor from './NoteEditor'
import NoteInfo from '../NoteInfo'

import {EditorState} from 'draft-js'

export default class Note extends Component {
  constructor(props) {
    super(props)

    if(this.props.note) {
      this.state = this._setState(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._setState(nextProps))
  }

  componentWillMount() {
    if(!this.props.note) {
      this.props.actions.loadNote(this.props.id)
    }
  }

  _setState(props) {
    const setEditorState = (editorState) => {
      if(editorState == "") {
        return EditorState.createEmpty()
      }
        
      return editorState
    }

    if(props.note) {
      const entryState = setEditorState(props.note.state)
      return {
        title: props.noteMeta.title,
        entryState: entryState,
        initialEditorState: entryState
      }
    }
    else {
      return {}
    }
  }

  _saveTitle = (title) => {
    this.setState({title}, () => {
      this.props.actions.updateNoteTitle(
        this.props.noteMeta.id,
        title
      )
    })
  }

  _saveEditorState = (entryState) => {
    this.setState({entryState}, () => {
      this.props.actions.updateNoteState(
        this.props.id,
        this.state.entryState
      )
    })
  }

  render() {
    // entry will be null if the entry is not in localstore
    if(!this.props.note) {
      return null
    }
    else {
      return (
        <div>
          <NoteTitle
            onChange={this._saveTitle}
            title={this.state.title}
          />
          <NoteEditor
            onChange={this._saveEditorState}
            initialEditorState={this.state.initialEditorState}
            settings={this.props.settings}
            actions={this.props.actions}
            entry={this.props.note}
          />
          {this.props.settings.infoOpen ? (
            <NoteInfo actions={this.props.actions} entry={this.props.note} />
          ) : null}
        </div>
      )
    }
  }
}
