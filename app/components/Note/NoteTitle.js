import React from 'react'
import {NoteTitleStyle} from './style'

const NoteTitle = ({title, onChange}) => {
  return (
    <NoteTitleStyle
      type="text"
      value={title}
      placeholder="Title"
      className="entry-title"
      onChange={ev => {
        if(ev.target.value !== title) {
          onChange(ev.target.value)
        }
      }}
    />
  )
}

export default NoteTitle
