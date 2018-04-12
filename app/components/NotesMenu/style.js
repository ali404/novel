import styled from 'styled-components'
import {MenuItem as Item} from '../NoteList/style'
import {colors} from '../../styled/constants'

export const NotesMenuStyle = styled.ul`
  overflow-y: scroll;
  height: 55vh;
  list-style: none;
  padding: 0 22px;
  margin: 0;
`

export const MenuItem = Item.extend`
  display: block;

  &:hover {
    cursor: pointer;
  }

  & svg {
    position: absolute;
    top: 15px;
    right: 12px;
    font-size: 18px;
    color: ${colors.grey["800"]};
  }
`

export const MenuItemAdd = MenuItem.extend`
  background-color: ${colors.grey["200"]};
  box-shadow: rgba(133, 133, 133, 0.5) 0 0 2px 0;
  font-size: 12px;
`
