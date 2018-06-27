import React from 'react'
import {MenuContainer, MenuList, MenuListItem, MenuItem} from './style'
import {MdEdit, MdFolderOpen, MdWhatshot, MdSettings} from 'react-icons/lib/md'

const MenuBar = () => {
  return <MenuContainer>
    <MenuList>
      <MenuListItem>
        <MenuItem to="/notes"><MdEdit /></MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/notebooks"><MdFolderOpen /></MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/challenges"><MdWhatshot /></MenuItem>
      </MenuListItem>
      <MenuListItem>
        <MenuItem to="/settings"><MdSettings /></MenuItem>
      </MenuListItem>
    </MenuList>
  </MenuContainer>
}
export default MenuBar