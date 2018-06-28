import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import NoteTitle from '../NoteTitle'
import NoteEditor from '../NoteEditor'

const Note = ({match}) => {
  const id = match.params.id

  return React.cloneElement(
    <div>
      <NoteTitle id={id} />
      <NoteEditor id={id} />
    </div>,
    {key: id}
  )
}

const bindStateToProps = state => ({})

export default connect(bindStateToProps, null, null, {
  pure: false
})(Note)