import React from 'react'
import {NavLink} from 'react-router-dom'

import {Title, DateTitle, NotesMenu, MenuItem} from './style'

const sortKeys = (entries) => {
  return Object.keys(entries).sort((aKey, bKey) => {
    let a = entries[aKey]
    let b = entries[bKey]

    let dateA = typeof a.dateCreated === 'string' ? new Date(a.dateCreated) : a.dateCreated
    let dateB = typeof b.dateCreated === 'string' ? new Date(b.dateCreated) : b.dateCreated

    return dateB - dateA
  })
}

const NoteList = ({actions, notes, match}) => {
  let notesList = []
  let keysSorted = sortKeys(notes)

  for(let id in keysSorted) {
    let note = notes[keysSorted[id]]
    let title = note.title === "" ? "Untitled" : note.title
    let dateString

    if(typeof note.dateCreated === 'string') {
      dateString = new Date(note.dateCreated)
      dateString = dateString.toDateString()
    }
    else {
      dateString = note.dateCreated.toDateString()
    }

    notesList.push((
      <NavLink
        to={"/notes/" + note.id}
        key={note.id}
        activeClassName="active"
      >
        <MenuItem>
          <Title>{title}</Title>
          <DateTitle>{dateString}</DateTitle>
        </MenuItem>
      </NavLink>
    ))
  }

  return <NotesMenu>{notesList}</NotesMenu>
}

export default NoteList
