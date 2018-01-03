import React from 'react'

const EntryTitle = ({title, onChange}) => {
  return (
    <input
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

export default EntryTitle
