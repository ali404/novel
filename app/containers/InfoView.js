import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import EntryInfo from '../components/EntryInfo'

import * as actions from '../actions'

const InfoView = ({match, entries, actions}) => {
  let key = match.params.id

  return React.cloneElement(
    <EntryInfo
      entry={entries[match.params.id]}
      actions={actions}
      id={match.params.id}
    />,
    {key: key}
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
)(InfoView)
