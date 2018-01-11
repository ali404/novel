import React, {Component} from 'react'
import _ from 'lodash'

import NoteTitle from './NoteTitle'
import NoteEditor from './NoteEditor'

import {EditorState, convertFromRaw, convertToRaw} from 'draft-js'

export default class Note extends Component {
  constructor(props) {
    super(props)

    if(this.props.entry) {
      this.state = this._setState(this.props)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._setState(nextProps))
  }

  componentWillMount() {
    if(!this.props.entry) {
      this.props.actions.loadEntryState(this.props.id)
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
        initialEditorState: setEditorState(props.entry.state),
        throttled_save: this._returnThrottled()
      }
    }
    else {
      return {}
    }
  }

  _returnThrottled() {
    return _.debounce(() => {
      this.props.actions.saveEntryState(
        this.props.entry.id
      )
    }, 1000)
  }

  _saveTitle = (title) => {
    this.props.actions.updateEntryTitle(
      this.props.entry.id,
      title
    )

    this.setState({title})
    this.state.throttled_save()
  }

  _saveEditorState = (editorState) => {
    this.props.actions.updateEntryState(
      this.props.entry.id,
      convertToRaw(editorState.getCurrentContent())
    )

    this.state.throttled_save()
  }

  render() {
    let returned

    if(!this.props.entry) {
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
            entry={this.props.entry}
          />
        </div>
      )
    }
  }
}
