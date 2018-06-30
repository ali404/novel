import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import mousetrap from 'mousetrap'

import * as actions from '../../actions'

class NoteAdder extends React.Component {
  static propTypes = {
    notebooks: PropTypes.object
  }

  componentWillMount() {
    mousetrap.bind('command+n', () => {
      const currId = this.props.notebooks.currentNotebook
      this.props.actions.createNote(currId)
    })
  }

  componentWillUnmount() {
    mousetrap.unbind('command+n')
  }

  shouldComponentUpdate(nextProps) {
    const currId = this.props.notebooks.currentNotebook
    const nextId = nextProps.notebooks.currentNotebook
    
    return currId !== nextId
  }

  render() {
    return null
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