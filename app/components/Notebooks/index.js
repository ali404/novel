import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ReactJson from 'react-json-view'
import _ from 'lodash'
import v4 from 'uuid/v4'

import NotebookCard from '../NotebookCard'
import {NotebookCardAdd} from '../NotebookCard'
import * as actions from '../../actions'

import {PageTitle} from '../../styled/components'
import {NotebooksList} from './style'

const Notebooks = ({notebooks, actions}) => {
  const {defaultNotebook, currentNotebook, ...allNotebooks} = notebooks
  let notebookCards = _.map(allNotebooks, (notebook, id) => {
    return <NotebookCard
      title={notebook.title}
      dateCreated={notebook.dateCreated}
      count={notebook.notesCount}
      key={id}
    />
  })

  notebookCards.push(<NotebookCardAdd key={`${v4()}_adder`} />)

  return <div>
    <PageTitle>Notebooks</PageTitle>
    <NotebooksList>{notebookCards}</NotebooksList>
  </div>
}

const bindStateToProps = state => ({
  notebooks: state.notebooks
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToProps)(Notebooks)