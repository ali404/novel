import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route, withRouter} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'

import * as actions from '../actions'

import MenuBar from '../components/MenuBar'
import NotesBar from '../components/NotesBar'
import Note from '../components/Note'
import Notebooks from '../components/Notebooks'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'
import LoadingState from './LoadingState'
import moment from 'moment'

import {Content, ContentContainer, Main} from '../styled/components'

class App extends Component {
  render() {
    const {isLoading, start, delay} = this.props.globals
    if(isLoading && delay) {
      console.info('Mounted the loading state: ', +moment())
      return <LoadingState delay={delay} />
    }
    else if(!start) {
      console.warn('Mounted null: ', +moment())
      return null
    }

    console.info('Mounted the app: ', +moment())
    return <CSSTransition timeout={500} classNames="fade">
      <React.Fragment>
        <MenuBar />
        <ContentContainer>
          <Route path="/notes" component={NotesBar} />
          <Main>
            <Route exact path="/notes/:id" component={Note} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/notebooks" component={Notebooks} />
            <Route exact path="/settings" component={Settings} />
          </Main>
        </ContentContainer>
      </React.Fragment>
    </CSSTransition>
  }
}

const bindStateToProps = state => ({
  globals: state.globals
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(bindStateToProps, bindDispatchToProps)(App))
