import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'

import NoteList from '../NoteList'
import {NotesMenuStyle, MenuItemAdd} from './style'

class NotesMenu extends PureComponent {
  render() {
    return (
      <NotesMenuStyle>
        <NoteList />
      </NotesMenuStyle>
    )
  }
}

export default withRouter(NotesMenu)
