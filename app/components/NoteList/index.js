import React from 'react'
import {NavLink} from 'react-router-dom'

import {Title, DateTitle} from './style'

const sortKeys = (entries) => {
  return Object.keys(entries).sort((aKey, bKey) => {
    let a = entries[aKey]
    let b = entries[bKey]

    let dateA = typeof a.dateCreated === 'string' ? new Date(a.dateCreated) : a.dateCreated
    let dateB = typeof b.dateCreated === 'string' ? new Date(b.dateCreated) : b.dateCreated

    return dateB - dateA
  })
}

const EntryListViewer = ({actions, entries, match}) => {
  let entryList = []

  let keysSorted = sortKeys(entries)

  for(let id in keysSorted) {
    let entry = entries[keysSorted[id]]
    let title = entry.title === "" ? "Untitled" : entry.title
    let dateString

    if(typeof entry.dateCreated === 'string') {
      dateString = new Date(entry.dateCreated)
      dateString = dateString.toDateString()
    }
    else {
      dateString = entry.dateCreated.toDateString()
    }

    entryList.push((
      <NavLink
        className="menu-item menu-item--link"
        to={"/" + entry.id}
        key={entry.id}
        activeClassName="active"
      >
        <Title>{title}</Title>
        <DateTitle>{dateString}</DateTitle>
      </NavLink>
    ))
  }

  return <div>{entryList}</div>
}

export default EntryListViewer
