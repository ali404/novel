import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import _ from 'lodash'

import NoteList from '../NoteList'
import {NotesMenuStyle, MenuItemAdd} from './style'

class NotesMenu extends React.Component {
  static propTypes = {
    notebooks: PropTypes.object.isRequired,
    notesMeta: PropTypes.object.isRequired
  }

  render() {
    const {notebooks, notesMeta} = this.props
    const id = notebooks.currentNotebook || 
      notebooks.defaultNotebook
    const notes = _.filter(notesMeta, (note, id) => {
      return note.notebook !== id
    })

    return (
      <NotesMenuStyle>
        <NoteList notes={notes} location={this.props.location} />
      </NotesMenuStyle>
    )
  }
} 
const bindStateToProps = state => ({
  notebooks: state.notebooks,
  notesMeta: state.notesMeta
})

export default withRouter(connect(bindStateToProps, null)(NotesMenu))
