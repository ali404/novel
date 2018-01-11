import React from 'react'
import {Route} from 'react-router'
import {NavLink} from 'react-router-dom'
import uuidv4 from 'uuid/v4'
import {remote} from 'electron'

import MdBook from 'react-icons/lib/md/book'
import MdChromeReaderMode from 'react-icons/lib/md/chrome-reader-mode'
import MdChevronRight from 'react-icons/lib/md/chevron-right'
import MdFirstPage from 'react-icons/lib/md/first-page'
import MdLastPage from 'react-icons/lib/md/last-page'
import MdInfoOutline from 'react-icons/lib/md/info-outline'
import MdInfo from 'react-icons/lib/md/info'

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
  if(!!menuOpen) {
    // when menu is open
    if(width < 920) return 720
    else return width - 200
  }
  else {
    if(width > 720) return width
    else return width + 200
  }
}

const Menu = ({actions, entries, settings, match}) => {

  const toggleDev = () => {
    let win = remote.getCurrentWindow()
    const bounds = win.getBounds()
    let newWidth = bounds.width
    newWidth = settings.menuOpen ? newWidth - 200 : newWidth + 200
    win.setSize(newWidth, bounds.height)

    actions.toggleMenu()
  }

  const toggleInfo = () => {
    actions.toggleInfo()
    const win = remote.getCurrentWindow()
    const bounds = win.getBounds()
    let newWidth = bounds.width
    newWidth = settings.infoOpen ? newWidth - 320 : newWidth + 320
    win.setSize(newWidth, bounds.height)
  }

  const openedOnNotes = () => (
    <MenuActionableItem onClick={_ => toggleDev()}>
      {settings.menuOpen ? (
        <MdFirstPage />
      ) : (
        <MdLastPage />
      )}
    </MenuActionableItem>
  )

  const openedOnSingleNote = () => (
    <MenuActionableItem onClick={_ => toggleInfo()}>
      {settings.infoOpen ? (
        <MdInfo />
      ) : (
        <MdInfoOutline />
      )}
    </MenuActionableItem>
  )

  return (
    <MenuStyle>
      <Logo />
      <ul className="menu-items">
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
      </ul>

      <MenuActionableItems>
        <Route path="/notes/:id" component={openedOnSingleNote} />
        <Route path="/notes" component={openedOnNotes} />
      </MenuActionableItems>
    </MenuStyle>
  )
}

export default Menu
