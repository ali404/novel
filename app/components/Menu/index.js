import React from 'react'
import {Link} from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import MdAdd from 'react-icons/lib/md/add'
import MdBook from 'react-icons/lib/md/book'
import MdChromeReaderMode from 'react-icons/lib/md/chrome-reader-mode'

import Logo from './logo.js'
import {
  MenuStyle,
  MenuItem,
  Title,
  DateTitle,
  Separator
} from './style'

const Menu = ({actions, entries, match}) => {
  return (
    <MenuStyle>
      <Logo />
      <ul className="menu-items">
        {/* <li
          className="menu-item menu-item--add"
          onClick={ev => actions.addEntry(uuidv4(), new Date())}
          key="unique"
          >
          <Title>Add a new entry</Title>
          <MdAdd />
          <MdBook />
        </li> */}
        <Separator />
        <Link to="/notes">
          <MenuItem>
            <MdBook />
          </MenuItem>
        </Link>
        <Link to="/notebooks">
          <MenuItem>
            <MdChromeReaderMode />
          </MenuItem>
        </Link>
        {/* <EntryListViewer
          actions={actions}
          entries={entries}
          match={match}
        /> */}
      </ul>
    </MenuStyle>
  )
}

export default Menu
