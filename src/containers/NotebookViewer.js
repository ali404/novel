import React from 'react'
import {connect} from 'react-redux'

import NotebookListViewer from '../components/NotebookListViewer'

const NotebookViewer = ({notebooks, match}) => (
  <NotebookListViewer
    entities={notebooks[match.params.id]}
  />
)

const mapStateToProps = state => ({
  notebooks: state.notebooks
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookViewer)
