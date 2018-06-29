import React from 'react'
import {connect} from 'react-redux'

import NotesMenu from '../NotesMenu'
import {NoteBarContainer, Notebook} from './style'

const NotesBar = ({notebooks, notesMeta}) => (
  <NoteBarContainer>
    {/* <Notebook>{notebooks.default}</Notebook> */}
    <Notebook>{notebooks[notebooks.defaultNotebook].title}</Notebook>
    <NotesMenu />
  </NoteBarContainer>
)

const bindStateToProps = state => ({
  notesMeta: state.notesMeta,
  notebooks: state.notebooks
})

export default connect(bindStateToProps, null)(NotesBar)