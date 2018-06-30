import React, {Component} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {NavLink} from 'react-router-dom'
import _ from 'lodash'

import {MenuItem, Title, DateTitle} from './style'

class NoteListItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    pathname: PropTypes.string
  }

  shouldComponentUpdate(nextProps) {
    if(this.props.title !== nextProps.title) return true
    
    const a = this.props.pathname.split('/')
    const id = a[2]
    const b = nextProps.pathname.split('/')
    const newId = b[2]

    return (this.props.id === id || this.props.id === newId) && id !== newId
  }

  render() {
    return <NavLink
      to={`/notes/${this.props.id}`}
      key={this.props.id}
      activeClassName="active"
    >
      <MenuItem>
        <Title>{this.props.title}</Title>
        <DateTitle>created on {this.props.dateCreated}</DateTitle>
      </MenuItem>
    </NavLink>
  }
}


export default class NoteList extends Component {
  static propTypes = {
    notes: PropTypes.array.isRequired
  }

  render() {
    const notes = _(this.props.notes)
      .sortBy(notes => -moment(notes.dateCreated))
      .map((note, id) => (
        <NoteListItem
          key={note.id}
          id={note.id}
          title={note.title}
          dateCreated={moment(note.dateCreated).format('Do of MMMM')}
          pathname={this.props.location.pathname}
        />
      ))
      .value()
    
    console.log(notes)
    return <div>{notes}</div>
  }
}