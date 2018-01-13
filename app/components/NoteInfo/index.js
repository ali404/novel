import React, {Component} from 'react'
import MdDelete from 'react-icons/lib/md/delete'
import {Info, Title, ActionableIcon} from './style'

export default class NoteInfo extends Component {
  render() {
    return (
      <Info>
        <Title>Note Settings</Title>
        <ActionableIcon onClick={ev => {
          this.props.actions.deleteEntry(this.props.note.id)
        }}>
          <MdDelete />
        </ActionableIcon>
      </Info>
    )
  }
}
