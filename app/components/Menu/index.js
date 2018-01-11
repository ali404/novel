import React from 'react'
import {NavLink} from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import {remote} from 'electron'

import MdAdd from 'react-icons/lib/md/add'
import MdBook from 'react-icons/lib/md/book'
import MdChromeReaderMode from 'react-icons/lib/md/chrome-reader-mode'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdFirstPage from 'react-icons/lib/md/first-page'
import MdLastPage from 'react-icons/lib/md/last-page'

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

const calculateComputedWidth = (width, menuOpen) => {
  // window can't be smaller than 640
  // if window between 640 and 840, resize until 640
  // if window bigger than 840, resize -200
  if(!!menuOpen) {
    // when menu is open
    if(width < 920) {
      return 720
    }
    else {
      return width - 200
    }
  }
  else {
    if(width > 720) {
      return width
    }
    else {
      return width + 200
    }
  }
}

const Menu = ({actions, entries, settings, match}) => {

  const toggleDev = () => {
    let win = remote.getCurrentWindow()
    const bounds = win.getBounds()
    let newWidth = calculateComputedWidth(bounds.width, settings.menuOpen)
    win.setSize(newWidth, bounds.height)

    actions.toggleMenu()
  }

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
        <MenuActionableItem onClick={_ => toggleDev()}>
          {settings.menuOpen ? (
            <MdFirstPage />
          ) : (
            <MdLastPage />
          )}
        </MenuActionableItem>
      </MenuActionableItems>
    </MenuStyle>
  )
}

export default Menu
