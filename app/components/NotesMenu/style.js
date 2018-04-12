import styled from 'styled-components'
import {MenuItem as Item} from '../NoteList/style'

export const NotesMenuStyle = styled.ul`
  overflow-y: scroll;
  height: 70vh;
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
    color: var(--grey-800);
  }
`
