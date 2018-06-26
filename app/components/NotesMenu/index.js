import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import uuidv4 from 'uuid/v4'

import NoteList from '../NoteList'
import withResource from '../../hocs/withResource'
import {NotesMenuStyle, MenuItemAdd} from './style'
import MdAdd from 'react-icons/lib/md/add'
import * as actions from '../../actions'

const Notes = withRouter(NoteList)

const AddNote = ({addNote}) => {
  return (
    <MenuItemAdd onClick={_ => addNote}>
      Add a new note
      <MdAdd />
    </MenuItemAdd>
  )
}

class NotesMenu extends Component {
  render() {
    return (
      <NotesMenuStyle open={this.props.settings.menu.open}>
        <AddNote addNote={ev => this.props.createNote} />
        <Notes />
      </NotesMenuStyle>
    )
  }
}

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

const bindStateToProps = state => ({
  settings: state.settings
})

export default connect(bindStateToProps, bindDispatchToProps, null, {pure: false})(NotesMenu)
