import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import uuidv4 from 'uuid/v4'

import NoteList from '../NoteList'
import withResource from '../../hocs/withResource'
import {NotesMenuStyle, MenuItemAdd} from './style'
import MdAdd from 'react-icons/lib/md/add'

const Notes = withRouter(NoteList)

const AddNote = ({actions}) => {
  return (
    <MenuItemAdd onClick={_ => actions.addEntry(uuidv4(), new Date())}>
      Add a new note
      <MdAdd />
    </MenuItemAdd>
  )
}

class NotesMenu extends Component {
  render() {
    return (
      <NotesMenuStyle open={this.props.settings.menuOpen}>
        <AddNote actions={this.props.actions} />
        <Notes />
      </NotesMenuStyle>
    )
  }
}

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

const bindStateToProps = state => ({
  settings: state.settings
})

export default connect(bindStateToProps, bindDispatchToProps, null, {pure: false})(NotesMenu)
