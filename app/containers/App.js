import React from 'react'
import {Route} from 'react-router'

import AppBar from '../components/AppBar'
import MenuBar from '../components/MenuBar'
import NotesBar from '../components/NotesBar'
import Note from '../components/Note'
import Notebooks from '../components/Notebooks'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'

import {AppContainer, Content, ContentContainer, Main} from '../styled/components'

const AppView = ({match}) => (
  <AppContainer>
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
)

export default AppView
