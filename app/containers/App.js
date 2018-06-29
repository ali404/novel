import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route, withRouter} from 'react-router-dom'

import * as actions from '../actions'

import AppBar from '../components/AppBar'
import MenuBar from '../components/MenuBar'
import NotesBar from '../components/NotesBar'
import Note from '../components/Note'
import Notebooks from '../components/Notebooks'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'
import moment from 'moment'

import {AppContainer, Content, ContentContainer, Main} from '../styled/components'

class App extends Component {
  render() {
    const {isLoading, start} = this.props.globals
    if(isLoading) {
      console.time()
      console.warn('Mounted the loading state: ', +moment())
      return <div>Loading</div>
    }
    else if(!start) {
      console.warn('Mounted null: ', +moment())
      return null
    }
    console.warn('Mounted the app: ', +moment())
    return <AppContainer>
      <AppBar />
      <Content>
        <MenuBar />
        <ContentContainer>
          <Route path="/notes" component={NotesBar} />
          <Main>
            {/* <Route exact path="/notes/:id" component={InfoView} /> */}
            <Route exact path="/notes/:id" component={Note} />
            <Route exact path="/challenges" component={Challenges} />
            <Route exact path="/notebooks" component={Notebooks} />
            <Route exact path="/settings" component={Settings} />
          </Main>
        </ContentContainer>
      </Content>
    </AppContainer>
  }
}

const bindStateToProps = state => ({
  globals: state.globals
})

const bindDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default withRouter(connect(bindStateToProps, bindDispatchToProps)(App))
