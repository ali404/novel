import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import moment from 'moment'

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

const NoteList = ({notes, match}) => {
  let notesList = []
  let keysSorted = sortKeys(notes)

  for(let id in keysSorted) {
    let note = notes[keysSorted[id]]
    let title = note.title === "" ? "Untitled" : note.title
    const dateString = moment(note.dateCreated).format('Do of MMMM')

    notesList.push((
      <NavLink
        to={"/notes/" + note.id}
        key={note.id}
        activeClassName="active"
      >
        <MenuItem>
          <Title>{title}</Title>
          <DateTitle>created on {dateString}</DateTitle>
        </MenuItem>
      </NavLink>
    ))
  }

  return <div>{notesList}</div>
}

const bindStateToProps = state => ({
  notes: state.notesMeta
})

export default withRouter(connect(bindStateToProps, null, null)(NoteList))
