import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../actions'
import {Notebook} from './style'

class NotebookSwitch extends React.Component {
  static propTypes = {
    notebooks: PropTypes.object
  }

  render() {
    const {notebooks, ...rest} = this.props
    return <Notebook>{notebooks[notebooks.defaultNotebook].title}</Notebook>
  }
}

const bindStateToProps = state => ({
  notebooks: state.notebooks
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  bindStateToProps, 
  bindDispatchToProps
)(NotebookSwitch)