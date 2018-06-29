import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../../actions'

import {NoteTitleStyle} from './style'

const NoteTitle = ({notesMeta, id, actions}) => {
  let title = (notesMeta[id] && notesMeta[id].title) || ''
  
  return <NoteTitleStyle
    type="text"
    value={title}
    placeholder="Title"
    onChange={ev => {
      if(ev.target.value !== title) {
        actions.updateNoteTitle(id, ev.target.value)
      }
    }}
  />
}

const bindStateToProps = state => ({
  notesMeta: state.notesMeta
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToProps)(NoteTitle)