import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import moment from 'moment'

import * as actions from '../../actions'
import {
  NotebookCardContainer, NotebookCardTitle, 
  NotebookCardDate, NotebookCardCount,
  NotebookCardInputTitle, NotebookCardAddBtn
} from './style'
import {MdAdd} from 'react-icons/lib/md'

const NotebookCard = ({title, dateCreated, count}) => {
  return <NotebookCardContainer large>
    <NotebookCardTitle>{title}</NotebookCardTitle>
    <NotebookCardDate>created at {moment(dateCreated).format("Do of MMMM")}</NotebookCardDate>
    <NotebookCardCount>{count}</NotebookCardCount>
  </NotebookCardContainer>
}



class _NotebookCardAdd extends Component {
  state = {
    title: ''
  }

  render() {
    return <NotebookCardContainer>
      <NotebookCardInputTitle 
        type="text"
        placeholder="Notebook title"
        value={this.state.title}
        onChange={ev => {
          this.setState({
            title: ev.target.value
          })
        }}
      />
      <NotebookCardAddBtn onClick={ev => {
        ev.preventDefault()
        if(!!this.state.title) {
          this.props.actions.addNotebook(this.state.title)
        }
      }}><MdAdd /></NotebookCardAddBtn>
    </NotebookCardContainer>
  }
}

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export const NotebookCardAdd = connect(null, bindDispatchToProps)(_NotebookCardAdd)
export default NotebookCard 