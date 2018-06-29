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
    dateCreated: PropTypes.string.isRequired
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
    const notes = _.map(this.props.notes, (note, id) => {
      return <NoteListItem
        key={note.id}
        id={note.id}
        title={note.title}
        dateCreated={moment(note.dateCreated).format('Do of MMMM')}
      />
    })

    return <div>{notes}</div>
  }
}