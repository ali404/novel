import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'
import {NotebookSwitcher} from './style'

const NotebookSwitch = ({actions, notebooks}) => {
  console.log(notebooks)
  return <NotebookSwitcher>On notebook {notebooks[notebooks.default].title}</NotebookSwitcher>
}

const bindStateToProps = state => ({
  notebooks: state.notebooks
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToProps)(NotebookSwitch)