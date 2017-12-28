import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Entry from '../components/Entry'

import * as actions from '../actions'

const EntryView = ({match, entries, actions}) => {
  return (
    <Entry
      entry={entries[match.params.id]}
      actions={actions}
      id={match.params.id}
    />
  )
}

const mapStateToProps = state => ({
  entries: state.entries
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryView)
