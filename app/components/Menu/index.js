import React from 'react'
import {NavLink} from 'react-router-dom'
import uuidv4 from 'uuid/v4'

import MdAdd from 'react-icons/lib/md/add'
import MdBook from 'react-icons/lib/md/book'
import MdChromeReaderMode from 'react-icons/lib/md/chrome-reader-mode'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdFirstPage from 'react-icons/lib/md/first-page'

import Logo from './logo.js'
import {
  MenuStyle,
  MenuItem,
  MenuActionableItem,
  MenuActionableItems,
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
        <NavLink to="/notes" activeClassName="active">
          <MenuItem>
            <MdBook />
          </MenuItem>
        </NavLink>
        <NavLink to="/notebooks" activeClassName="active">
          <MenuItem>
            <MdChromeReaderMode />
          </MenuItem>
        </NavLink>
        {/* <EntryListViewer
          actions={actions}
          entries={entries}
          match={match}
        /> */}
      </ul>
      <MenuActionableItems>
        <MenuActionableItem>
          <MdFirstPage />
        </MenuActionableItem>
      </MenuActionableItems>
    </MenuStyle>
  )
}

export default Menu
