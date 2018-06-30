import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route, withRouter} from 'react-router-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import * as actions from '../actions'

import MenuBar from '../components/MenuBar'
import NotesBar from '../components/NotesBar'
import Note from '../components/Note'
import DeleteNote from '../components/DeleteNote'
import Notebooks from '../components/Notebooks'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'
import LoadingState from './LoadingState'
import moment from 'moment'

import {Content, ContentContainer, Main} from '../styled/components'

class App extends Component {
  render() {
    const {isLoading, start, delay} = this.props.globals
    let returned 
    
    if(isLoading && delay) {
      // console.info('Mounted the loading state: ', +moment())
      returned = <LoadingState delay={delay} />
    }
    else if(!start) {
      // console.warn('Mounted null: ', +moment())
      return null
    }
    else {
      // console.info('Mounted the app: ', +moment())
      returned = <React.Fragment>
        <MenuBar />
        <ContentContainer>
          <Route path="/notes" component={NotesBar} />
          <Main>
            <Route path="/notes/:id" component={Note} />
            <Route exact path="/notes/:id/delete" component={DeleteNote} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/notebooks" component={Notebooks} />
            <Route exact path="/settings" component={Settings} />
          </Main>
        </ContentContainer>
      </React.Fragment>
    }

    return <TransitionGroup component={null}>
      <CSSTransition
        in
        timeout={500}
        classNames="fade"
        appear={true}
        unmountOnExit={true}>
        {returned}
      </CSSTransition>
    </TransitionGroup>
  }
}

const bindStateToProps = state => ({
  globals: state.globals
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(bindStateToProps, bindDispatchToProps)(App))
