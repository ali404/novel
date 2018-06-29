import React from 'react'
import {connect} from 'react-redux'
import {NoteBarContainer} from './style'

import NotebookSwitch from '../NotebookSwitch'
import NoteAdder from '../NoteAdder'
import NotesMenu from '../NotesMenu'

export default class NotesBar extends React.Component {
  render() {
    return (
      <NoteBarContainer>
        <NotebookSwitch />
        <NoteAdder />
        <NotesMenu />
      </NoteBarContainer>
    )
  }
}