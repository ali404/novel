import React from 'react'
import {withRouter} from 'react-router-dom'
import mousetrap from 'mousetrap'

import NoteTitle from '../NoteTitle'
import NoteEditor from '../NoteEditor'

class Note extends React.Component {
  componentWillMount() {
    mousetrap.bind('command+shift+d', () => {
      const {history} = this.props
      const {id} = this.props.match.params
      history.push(`/notes/${id}/delete`)
    })
  }

  componentWillUnmount() {
    mousetrap.unbind('command+shift+d')
  }

  render() {
    const id = this.props.match.params.id

  return React.cloneElement(
    <div>
      <NoteTitle id={id} />
      <NoteEditor id={id} />
    </div>,
    {key: id}
  )
  }
}

export default withRouter(Note)