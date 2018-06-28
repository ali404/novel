import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Editor from './Editor'
import * as actions from '../../actions'

class NoteEditor extends Component {
  state = {
    editorState: null
  }

  constructor(props) {
    super(props)
    this._reconcileEditorState(props)
  }

  componentWillMount() {
    this.props.actions.loadNote(this.props.id)
  }

  componentWillReceiveProps(nextProps) {
    this._reconcileEditorState(nextProps)
  }

  _reconcileEditorState(props) {
    if(
      props.notes && props.id 
      && props.notes[props.id] 
      && props.notes[props.id].state
    ) {
      this.setState({
        editorState: props.notes[props.id].state
      })
    }
  }

  _onChange = (state) => {
    this.setState({editorState: state}, () => {
      this.props.actions.updateNoteState(
        this.props.id, 
        this.state.editorState
      )
    })
  }

  render() {
    if(!this.state.editorState) return null

    return <Editor
      onChange={this._onChange}
      editorState={this.state.editorState}
    />
  }
}

const bindStateToProps = state => ({
  notes: state.notes
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToProps, null, {
  pure: false
})(NoteEditor)