import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions'

import AddEntity from '../components/AddEntity'

const AddEntry = ({notebooks}) => (
  <AddEntity
    entityName="Entry"
    text="Add an entry"
    actions={actions}
  />
)

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEntry)
