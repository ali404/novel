import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import svg from '../../logo.svg'

import MdAdd from 'react-icons/lib/md/add'

import uuidv4 from 'uuid/v4'

const Menu = ({actions, entries}) => {
  let entryList = []
  for(let id in entries) {
    let entry = entries[id]
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
      <Link
        className="menu-item menu-item--link"
        to={"/" + entry.id}
        key={entry.id}
      >
        <p className="menu-item--link__title">
          {title}
        </p>
        <p className="menu-item--link__date">
          {dateString}
        </p>
      </Link>
    ))
  }

  return (
    <div className="menu">
      <img src={svg} className="menu-logo" alt="novel logo" />
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
