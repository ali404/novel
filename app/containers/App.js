import React from 'react'
import {Route} from 'react-router'

import Menu from '../components/Menu'
import EntryView from './EntryView'
import AppBar from '../components/AppBar'
import MenuBar from '../components/MenuBar'
import NotesMenu from '../components/NotesMenu'
import Challenges from '../components/Challenges'
import Settings from '../components/Settings'

import {AppContainer, Content, ContentContainer, Main} from '../styled/components'

const AppView = ({match}) => (
  <AppContainer>
    <AppBar />
    <Content>
      <MenuBar />
      <Route path="/notes" component={NotesMenu} />
      <ContentContainer>
        <Menu />
        <Main>
          {/* <Route exact path="/notes/:id" component={InfoView} /> */}
          <Route exact path="/notes/:id" component={EntryView} />
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/settings" component={Settings} />
        </Main>
      </ContentContainer>
    </Content>
  </AppContainer>
)

export default AppView
