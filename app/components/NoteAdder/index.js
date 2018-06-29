import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actions from '../../actions'

class NoteAdder extends React.Component {
  static propTypes = {
    notebooks: PropTypes.object
  }

  shouldComponentUpdate(nextProps) {
    const currId = this.props.notebooks.currentNotebook
    const nextId = nextProps.notebooks.currentNotebook
    
    return currId !== nextId
  }

  render() {
    const {notebooks, ...rest} = this.props
    const id = notebooks.currentNotebook
    return <p>Add a new note to {notebooks[id].title}</p>
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
)(NoteAdder)