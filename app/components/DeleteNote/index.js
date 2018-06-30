import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions'
import {
  DeleteNoteContainer, DeleteNoteModal, 
  Title, Button, BtnGroup
} from './style'

class DeleteNote extends Component {
  state = {}

  render() {
    return <DeleteNoteContainer>
      <DeleteNoteModal>
        <Title>Are you sure you want to delete this note?</Title>
        <BtnGroup>
          <Button danger onClick={ev => {
            this.props.actions.deleteNote(this.props.match.params.id)
            this.props.history.push(`/notes`)
          }}>Delete it</Button>
          <Button positive onClick={ev => {
            this.props.history.push(`/notes/${this.props.match.params.id}`)
          }}>Cancel</Button>
        </BtnGroup>
      </DeleteNoteModal>
    </DeleteNoteContainer>
  }
}

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(null, bindDispatchToProps)(DeleteNote))