import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Note from '../components/Note'

import * as actions from '../actions'

const EntryView = ({match, entries, actions, settings}) => {
  let key = match.params.id
  return React.cloneElement(
    <Note
      entry={entries[match.params.id]}
      actions={actions}
      id={match.params.id}
      settings={settings}
    />,
    {key: key}
  )
}

const mapStateToProps = state => ({
  entries: state.entries,
  settings: state.settings
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryView)
