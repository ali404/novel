import React from 'react'

const EntryTitle = ({title, onChange}) => {
  return (
    <div>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={ev => {
          if(ev.target.value !== title) {
            onChange(ev.target.value)
          }
        }}
      />
    </div>
  )
}

export default EntryTitle
