import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import uuidv4 from 'uuid/v4'

import NotebookListContainer from '../NotebookList'

class NotebookCreator extends Component {
  state = {
    notebookTitle: undefined
  }

  render() {
    return <div>
        <input 
            type="text" 
            onChange={ev => {
                this.setState({
                    notebookTitle: ev.target.value
                })
            }} 
            value={this.state.notebookTitle}
            placeholder="notebook title"
        />
        <button onClick={ev => {
            const id = uuidv4()
            const currDate = new Date()
            this.props.actions.addNotebook(id, this.state.notebookTitle, currDate)
            this.setState({
                notebookTitle: undefined
            })
        }} disabled={!this.state.notebookTitle}>Save Notebook</button>
        <NotebookListContainer />
    </div>
  }
}

const bindStateToProps = state => ({})
const bindDispatchToActions = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(bindStateToProps, bindDispatchToActions)(NotebookCreator)