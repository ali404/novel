import React, {Component} from 'react'
import {withRouter} from 'react-router'
import uuidv4 from 'uuid/v4'

import NoteList from '../NoteList'
import withResource from '../../hocs/withResource'
import {NotesMenuStyle, MenuItem} from './style'
import MdAdd from 'react-icons/lib/md/add'

const Notes = withRouter(withResource([["notes", "entryTitles"]], NoteList))

const AddNote = ({actions}) => {
  return (
    <MenuItem onClick={_ => actions.addEntry(uuidv4(), new Date())}>
      Add a new note
      <MdAdd />
    </MenuItem>
  )
}

class NotesMenu extends Component {
  componentWillReceiveProps(newProps) {
    if(newProps.settings.menuOpen !== this.props.settings.menuOpen) {
      // the prop has changed, begin animation!

    }
  }

  render() {
    return (
      <NotesMenuStyle open={this.props.settings.menuOpen}>
        <AddNote actions={this.props.actions} />
        <Notes />
      </NotesMenuStyle>
    )
  }
}

export default NotesMenu
