import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import mousetrap from 'mousetrap'

import {NoteBarContainer} from './style'
import NotebookSwitch from '../NotebookSwitch'
import NoteAdder from '../NoteAdder'
import NotesMenu from '../NotesMenu'

import * as actions from '../../actions'

class NotesBar extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired
  }

  componentWillMount() {
    mousetrap.bind('command+shift+m', () => {
      this.props.actions.toggleNoteBar()
    })
  }

  componentWillUnmount() {
    mousetrap.unbind('command+shift+m')
  }

  render() {
    return (
      <NoteBarContainer open={this.props.settings.noteBar.open}>
        <NotebookSwitch />
        <NoteAdder />
        <NotesMenu />
      </NoteBarContainer>
    )
  }
}

const bindStateToProps = state => ({
  settings: state.settings
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToProps)(NotesBar)