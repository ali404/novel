import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../../actions'
import {Notebook} from './style'
import _ from 'lodash'

class NotebookSwitch extends React.Component {
  static propTypes = {
    notebooks: PropTypes.object
  }

  _handleChange = (ev) => {
    this.props.actions.setCurrentNotebook(ev.target.value)
  }

  render() {
    const {defaultNotebook, currentNotebook, ...notebooks} = this.props.notebooks
    const options = _.map(notebooks, (notebook, id) => {
      return <option key={id} value={notebook.id}>{notebook.title}</option>
    })

    return <select value={currentNotebook} onChange={this._handleChange}>
      {options}
    </select>
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