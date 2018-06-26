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
        title: props.note.title,
        entryState: entryState,
        initialEditorState: entryState,
        throttled_save: this._returnThrottled()
      }
    }
    else {
      return {}
    }
  }

  _returnThrottled() {
    return _.debounce(() => {
      this.props.actions.updateNoteState(
        this.props.note.id,
        this.state.entryState
      )
    }, 1000)
  }

  _saveTitle = (title) => {
    this.props.actions.updateNoteTitle(
      this.props.note.id,
      title
    )

    this.setState({title})
    this.state.throttled_save()
  }

  _saveEditorState = (entryState) => {
    this.setState({entryState})
    this.state.throttled_save()
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
