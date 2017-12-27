import React from 'react'
import {connect} from 'react-redux'

import Notebooks from '../components/Notebooks'

const NotebooksView = ({notebooks}) => (
  <Notebooks
    notebooks={notebooks}
  />
)

const mapStateToProps = state => ({
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebooksView)
