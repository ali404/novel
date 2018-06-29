import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Route} from 'react-router'

import * as actions from '../actions'

import AppBar from '../components/AppBar'
import MenuBar from '../components/MenuBar'
import NotesBar from '../components/NotesBar'
import Note from '../components/Note'
import Notebooks from '../components/Notebooks'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'

import {AppContainer, Content, ContentContainer, Main} from '../styled/components'

export default class AppView extends Component {
  render() {
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

export default connect(bindStateToProps, bindDispatchToProps)(AppView)
