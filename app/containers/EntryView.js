import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Note from '../components/Note'

import * as actions from '../actions'

const EntryView = ({match, notes, notesMeta, actions, settings}) => {
  const id = match.params.id
  return React.cloneElement(
    <Note
      note={notes[id]}
      notesMeta={notesMeta}
      actions={actions}
      id={match.params.id}
      settings={settings}
    />,
    {key: id}
  )
}

const mapStateToProps = state => ({
  notes: state.notes,
  notesMeta: state.notesMeta,
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryView)