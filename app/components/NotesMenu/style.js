import styled from 'styled-components'
import {MenuItem as Item} from '../NoteList/style'
import {colors} from '../../styled/constants'

export const NotesMenuStyle = styled.ul`
  list-style: none;
  padding: 0;
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
  font-size: 12px;
  padding: 16px;
`
