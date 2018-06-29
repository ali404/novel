import React from 'react'
import {withRouter} from 'react-router-dom'

import NoteTitle from '../NoteTitle'
import NoteEditor from '../NoteEditor'

const Note = ({match}) => {
  const id = match.params.id

  return React.cloneElement(
    <div>
      <NoteTitle id={id} />
      <NoteEditor id={id} />
    </div>,
    {key: id}
  )
}

const bindStateToProps = state => ({})

export default withRouter(Note)