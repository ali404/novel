import React from 'react'
import {MenuContainer, MenuList, MenuListItem, MenuItem} from './style'
import {MdEdit, MdFolderOpen, MdWhatshot, MdSettings} from 'react-icons/lib/md'

const MenuBar = () => {
  return <MenuContainer>
    <MenuList>
      <MenuListItem>
        <MenuItem to="/notes" activeClassName="active">
          <MdEdit />
        </MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/notebooks" activeClassName="active">
          <MdFolderOpen />
        </MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/challenges" activeClassName="active">
          <MdWhatshot />
        </MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/settings" activeClassName="active">
          <MdSettings />
        </MenuItem>
      </MenuListItem>
    </MenuList>
  </MenuContainer>
}
export default MenuBar