import React from 'react'
import {withRouter} from 'react-router'

const EntryView = ({match}) => {
  return (
    <div>{match.params.id}</div>
  )
}

export default EntryView
