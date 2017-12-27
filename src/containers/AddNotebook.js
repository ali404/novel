import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions'

import AddEntity from '../components/AddEntity'

const AddNotebook = ({notebooks, actions}) => {
  return (
    <AddEntity
      entityName="Notebook"
      text="Add a notebook"
      actions={actions}
    />
  )
}

const mapStateToProps = state => ({
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNotebook)
