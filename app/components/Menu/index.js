import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import MdAdd from 'react-icons/lib/md/add'
import uuidv4 from 'uuid/v4'

import Logo from './logo.js'

const sortKeys = (entries) => {
  return Object.keys(entries).sort((aKey, bKey) => {
    let a = entries[aKey]
    let b = entries[bKey]

    let dateA = typeof a.dateCreated === 'string' ? new Date(a.dateCreated) : a.dateCreated
    let dateB = typeof b.dateCreated === 'string' ? new Date(b.dateCreated) : b.dateCreated

    return dateA < dateB
  })
}

const Menu = ({actions, entries, match}) => {
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
        <p className="menu-item--link__title">{title}</p>
        <p className="menu-item--link__date">{dateString}</p>
      </NavLink>
    ))
  }

  return (
    <div className="menu">
      <Logo />
      <ul className="menu-items">
        <li
          className="menu-item menu-item--add"
          onClick={ev => actions.addEntry(uuidv4(), new Date())}
          key="unique"
        >
          <h4>Add a new entry</h4>
          <MdAdd />
        </li>
        {entryList}
      </ul>
    </div>
  )
}

export default Menu
