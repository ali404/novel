import React from 'react'

import NoteList from '../NoteList'
import withResource from '../../hocs/withResource'
import {NotesMenuStyle} from './style'

const Notes = withResource([["notes", "entryTitles"]], NoteList)

const AddNote = ({actions}) => {
  return (<div>Hello</div>)
}

const NotesMenu = ({actions, settings}) => {
  console.log(settings)
  return (
    <NotesMenuStyle open={settings.menuOpen}>
      <AddNote actions={actions} />
      <Notes />
    </NotesMenuStyle>
  )
}

export default NotesMenu
