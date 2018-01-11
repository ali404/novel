import styled from 'styled-components'
import {MenuItem as Item} from '../NoteList/style'

export const NotesMenuStyle = styled.ul`
  overflow-y: scroll;
  height: 100vh;
  list-style: none;
  flex: ${props => props.open ? '0 0 200px' : '0'};
  ${'' /* transition: 0.1s all ease-in; */}
  padding: 0;
  margin: 0;
  border-right: ${props => props.open ? '1px solid var(--grey-200)' : 'none'};
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
