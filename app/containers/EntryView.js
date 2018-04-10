import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Note from '../components/Note'

import * as actions from '../actions'

const EntryView = ({match, entries, actions, settings}) => {
  const id = match.params.id
  return React.cloneElement(
    <Note
      entry={entries[id]}
      actions={actions}
      id={match.params.id}
      settings={settings}
    />,
    {key: id}
  )
}

const mapStateToProps = state => ({
  entries: state.entries,
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EntryView)